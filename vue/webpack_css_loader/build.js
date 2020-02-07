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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vue_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_js__ = __webpack_require__(11);


// es6 Module 

// 整个项目的入口文件




new __WEBPACK_IMPORTED_MODULE_1__vue_js___default.a({
	el:'#app',
	components:{
		App: __WEBPACK_IMPORTED_MODULE_2__App_js__["a" /* default */]
	},
	template:`
		<App />
	`
});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(3);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!./node_modules/css-loader/index.js!./main.css", function() {
		var newContent = require("!!./node_modules/css-loader/index.js!./main.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "body{\n\tbackground-color: green;\n}", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {
		return null;
	}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.17
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Vue = factory());
}(this, (function () { 'use strict';

/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if ("development" !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    {
      for (var key in vm.$slots) {
        // $flow-disable-line
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ("development" !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.17';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        "development" !== 'production' &&
        "development" !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ("development" !== 'production' &&
      "development" !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
}

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
}

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
}

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '');
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if ("development" !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if ("development" !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$2 = {
  preTransformNode: preTransformNode
}

var modules$1 = [
  klass$1,
  style$1,
  model$2
]

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
}

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  esc: 'Escape',
  tab: 'Tab',
  enter: 'Enter',
  space: ' ',
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  'delete': ['Backspace', 'Delete']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    /* istanbul ignore if */
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    /* istanbul ignore if */
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
}

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

return Vue;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(8).setImmediate))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(9);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(10)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__myGirl_jpg__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__myGirl_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__myGirl_jpg__);

/* harmony default export */ __webpack_exports__["a"] = ({
	template:`
		<div>
			<img :src="imgSrc" alt="" />
		</div>
	`,
	data(){
		return {
			imgSrc:__WEBPACK_IMPORTED_MODULE_0__myGirl_jpg___default.a
		}
	}
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAJQAlAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAJEA8ADASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAAAwABAgQFBgcI/8QARBAAAQMDAgQFAgMHAgUCBgMBAQACAwQRIQUxBhJBURMiMmFxIzMHFEIkNFJicoGRobEVJTWCwUNzJjZTY5LRF0ThRf/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAtEQEBAAICAgIDAQACAgEEAwAAAQIRAzESIQRBEzJRIkJhFHEjM0NSkYGx8P/aAAwDAQACEQMRAD8A7uTcrnaH/rlT3XRyblc5TY16fuudri6QHGFz3E48sB/mXQMvyLA4nxHD250Xop2sj9zHws7hc3kq7/xrQBvRAjsqHCwuas/zpne3R0m391Ydt7qtRbH5Vl6EVn6nf8rJ8LK0M/Q7i61dS/dpPhZOh/Z/uk0x6UuKfRF/WF01Fikj/pC5nir0Rf1hdNR/ukd/4QmVc9XH/n1J7uXUS35Tdcjqj+TXaLP6110mWH4QVcfxVmkc0dXBdVpreWgp29mBctxM0mNg7vH+666lHLTRDs0IFTbujgeVBZkow9KqIquRko0e4Qf1I8Q8zflEKtnaNidoCR9LfhJu62jKpjdPD91vymH+qlF95vymlqxnzZWlRkcyzY/UtGksCmcXybDCs0n2GqpfBurtOPosSrSdipJJKVEkkkgEkkkgEkkkgGVPVn8lDIe6uLL4gfy0Vu5Tx91HJdY1laI+1az3wuoXHae7kmY7sV0Tq36a05J7ZcOWpqsXXXD84fdZ8brORNUk8Wouq8R84utcZ6c2V3lXV6Ef2Z3ytMLJ0A/TeD8rWC58u3dx/rDpJJKVkkkkgEkkkgEkkkgEkkmOyASRwmykSgEkkl0QCQ4L8p+VMua0eYgD3XPV+ouZ4jWScrObHcpWydl9uhLhm7h/lVaupgEEjTKwEjuuSlqi4XBcPe6z5qmMHzvyT1WOXPMWs4rQZo3CR5LTbmOVBXKeua0WvzN+Lq5HJRT4eIwT/ZZ4/LxvcK/Hs6rGAzhEYMrVk0qN4vTyWPQO2P8AdUpaaWnfaVhb79F04cmOfTHLC49oMH14v6wvSWelvwF5uz70X9YXpDPQ34C0qePunsmKRTqWpkuqRSQCThMnCASSdMgEnSSQCSSSQCSSSQCSSSQCSSSQCSSSQCSSSQCTJJIBJJJIBJYSSQCSS/ukgF1TSeh3wnUX+g/CAzR6ijQm0jUEHzFGhBMrVTKKur/e/sg0I8rkfV/u/wBkGgFw5OdC9hPGSiUBtVxqEmHFSo/3tlu6Et9JIpKG5P2VSRW3bFU5OqcTQXLRi+234Wc5aEWY2/CKWPaRSTprpLP0WXUYmctNZtQPrG6cTkTdkKYIrdsoUwVIAOyFJ6SinZBk2KCecyblc5FjX5fhdJJ6j8rnNtfkPTlXJXXi6Jh8qweJ/sx2/jC3Y78gWHxOPoRn+cIKdjN/ctv0qhwqDaq/rKvtzRf9qocKHy1X9ZTO9uhov1fKtuVOiPq+VcccIiaz9RzTyfCx9E+0flbGo/Ykx0WRomIjbule149KXFAxF/WF01J+7M/pC5jifaL+sLp6Q/sjP6QnCrkuISRrdBb/AOouzd9r+y43Wxza7QD/AO4uyf8Aax2QTk9fHNJC3vIF10QtG0ewXK6q3mrqdo/+oF1gwLeyBkUe6LfCEzdFd6VURQAMlWIPW2/dVxvurNN91o90Qq2XelvZME8mA2yTVtGVTtdPCPrN+VFThH1W/KaWqz1YWhS7rPj9S0KU2KZxce0coKvQfZZ8Ki4+TIV+D7LPhTWk7TTpkklHSSSQCTJ0kAySSdAMVz3Esp5mx9F0K5niU/tA72V8f7Mee6wUKO9wtBxIaVTom4BV4tBblaZdsMJ6Zc8ZMl0Hl5XtwtV0F9jhVpYPMFUyTlg19CcQ8gncLaC56hd4MjSt9jg9ocNisM+3VxX1pNJME6lqSSSSASSSSASa6SY9blAOUxNt0F84yGWJHU7KlIPHHNJMWsB2acuQW2jzt252/wCUi9g3e0fJXNapNR0sJLzdwy0B3mXAavxJ+XlJMxe3pc5Ci56ulY43J6tV6xR0vrlDj2blcxrHH9DRSNijuZXmzQckleQapxe95eWPs1ozc7qzwxQ6tqlP/wASgjijlc67Xz55W/yjuqkyvupysnrb0htdqFfIZppXRR7hqoarqToASHtL+hcNlkarrFRRR+E54MgA5ubYlcjU64yqkfG55Y8/pJ3+FOeN7Vx2Nuv1mc3E1QQDn6eVmP4gLTZ8sns4gLCrJ3RedpLR1ByD/wDpZ7qhs924F9mn/wAFYfjmXbo8tO1ZxQxjLuNx1Ld1pUPEdNVN5WyMedrOw5eUTSyU7zy3LR0O4Ttq2yEOcwB38TcFRfiT6L83t7VSaxLC4NppiLf+nJsfhdBQcRxTfRrI/Cd2OWleG6XxFVUsjBK9lRAP0yDI+Cuz0vVKTU2tbHI6GU/pfkf2KxvDnxe4fnjnHpktEyV0c1I4eoEtv/su1b6G37BeRUtbW6Xyc31IjuB1+F2vD3EkNYxrefmG1j6mrp4uffrJhlx+N3HU5/skmaQ5oINweqcbrqSWEkildAOAkmJS67oB0kkwyEBJMU18p0AgnTJ0AkkkkAkkkkAkkkkAkkkkAkkkkAkkkxQDpkkv7IBJ0kxQCSSSQCTP9B+E6Z3pPwgMsHzFHhNpGquPUbd0eD7jVbKK+rj6oPsg0H6kfV/uD4VehNnOROhe0JfUflPSfvUfymly8/KlS/vLPlCXQJBMkN1Dcx9JVSTdXHekqpInCqu5aEP2m/CoO2V+D7LfhOpx7THVIpJzspWZZlR94rTWZUfecnE5HbshTbIzdkGbZUigHZCk9JsinHVCf6SgnnEhuT8rnZbDiA36tXRS+o/K56qbbXmnu1cldeLfi9OVi8TfurP6gtqH0LF4lF6Qf1BMvsSM/sP/AGqhwpbkqT/OVejN6D/tVHhT0VP9ZRFXt0NFu75VsqnSGzn/ACrhQiqNfbwX/CxtG+2flbNd9p/wsXRjhwHcpLx6U+KNov6wunpf3RmMcoXLcTnyxX/jC6ekN6Nl/wCEJwq5nVBzcQUI7OXXP+3ZcdqrrcQ0Nv4l2Dr+GgnPVbefVKcdnLpjt7rny3m1aHrYroTsbJQZEzdEd6Chxqb/AElXEUFu6t0g+s1VG3uFcpPvNwiFWvJsEzU8uwTNW0ZJqUP3m/KjvgKcIImamlqs9Sv0u6os9QV+lFzhM4tOF473WhD9lg9lQks1tloR/bb8Ka0x7SSSSSUdJMkgHSSTIBJJJFAJctrX1Kw2XS1D/Cic4rm5AZJi491eH9Yc3v0amjLWhWzYNsma2zQhyusVfaOoLiyDJa6h4l0J7iiQrktsI6LX093NT/BXPtcWjK19HmBY5pKnKel8d9tNOmSWboOkkkgEmukUJz7yiMDpcnsgHfKxl+d4FlWdWU0nlEzHewKlNTMLCSC4nFkKppaSKndeCMYteyV39EDVVEbY7ucLE2te2Fg6rXxNgkLW2HV98geyqaxNHp7S/wAUtAGI5HYC854n4ohDSInvmlO1sNC5cuTLO+OLfDjknlkta/roEjxFI/358gD3Xnet8SMdzsiiHN/9V2T/AGCJBqzNRqX02ovnY2Rp5TEAS0+46hWRwGaiKKpl1EGnc4Nc5rNvf4XTxcUx/Zlzc1s1izuGeG63Xq9sEpdFACHOkO1t16TqurR6LTMpGOa8RN5QW4LVX1Kvp9G0mGlo3eeJvI543+fhcFqmpNqi9zHEzHHMeoXRa5sZtralqsGoMIeXC+zgVytWxzHkOdcfpddVmSPjkJBx1CPLKJGXaLg7rL3K39WezxV8rRyOdzAYz1SMjXgmM2z6O3wqUgA9wdiogm+DZ3Qp3GFu9VpeO2RoZN6x6X9R8oBaRJymzZOhGzkDnDhiwkG/upskD28r7kj/AES8dKt2MbONrcrxuOhRKapmpnh0LyCDkIIIIDZMno9PdwNxuP1d0er6qa9A4d4tkjjDJQJo/wBcUm49wu1oXUtYwVemS7i5aDZzV4lTyEESR3Bb0XQ6NqMtLM2eim5c3czsf/0uXl4Jfca45voHh3W3MDIKwgtOBIusG173BXkWhazBqcADgIp9iw7OPsu84f1F1m0tQ6/8Dj/sVPDy2XwyGWP3HQJ0gl1XWgrDulf2SKdAIpgkOqVvdAOldJMEBJJMnQDJJ0kAkkkkAkkkkAkkkkAkydMgEkkkgEnTJ0AySSSASSSSASZ3pPwnTH0n4QGXbzlWYcOCrk+YorHedqpnAdXH1B8KvQXLnWVjVvWPhB0/1lOdFf2Clw8pU/7xGfdSn+4VGDE7M9UE6DphOmTlQ2J2xVOTYq25VJetk4mgO6q/B9lqoOwr9N9lqdLHtPsnKeyYqVksup+8VqLMqPvFOJyO3ZBm2Rm+lBmG6pNB6IMmGlGOyDJ6ShLzqQZK52u8uuRe7V0Um5+VzuqY1mD3auSuvHtuxekd1k8Si9GT7rWg9AWZxGL0Ls7FBfYcX/Txb+FU+E/tVP8A7hVqDOn3/lVPhH7dT/7hTh3t0NHh7/lXDkKlSfdervRCapV+Yn/CxNIw1/ytyuH03fCw9Kxz/KTTHpR4nI5Yv6wuopP3Nn9IXLcUeiK/8YXUUgtRs/pCaa5PWD/8Rafb+Ndk77Z72XG6qL8SUA/mXZO+3hBMmBvNqzD2W6VjUbb6mSegWydkDI7MJS4aU7flNMbNTQGzortF95qps3V6i+81PEq1JbWCZoTy4ATN2W8ZVMfKnCfqt+VDHVThH1R8ppazPUr9KTdUGZd/sr9Kg4sSEkY2WnHiNnws8i7MBaLPQ34U1pidJJJJRJJJIBJJ0yASX90kz3BrSXHAQFPVHfRDQclZTWqzWymV+NlWubhaY+o58ruiXwq8/siuN0KXKqJobALo3IEINIIsjAFBQOVtm3UqKQxvwlKCQoRggpjqt+mn5zyk/CshY9G8+OxbCxyjowu4dJJMksiogAEkbndP/smcQ0ElAQkfYht7XyT2C5/WdVYzmsQWN6nqp6tqAayTzDmta/YLxD8ROLnlz6Khk5WjD5B1PYLl5OS5Zfjw7a4YTXnl01OKuJNNfLJ4g/MPHd2AV5frWqCpkcIh4Y6CyxKqrc9xL3Oc49bqv4+PLcu9108Xx5x++2XJ8m5+vp1vDOiy1sEM5qWQyh/lffIPQf8A+L0GDU5YqIw1Yh52gsl8MYcP4gvHtLmnY5zGvfyOIJA79/ldVHPP5JLkYyD+pVy5aLhw8vZa/NPHU3ceZtvI4G4LVzk7hI42wTnHT4XR1RD4uWQXiOQf4Vz1dAYX2/uCNlnhnb215OPXQVzILH1jf3Qw8tuW4slzc22HDdJw5vN+rqFsxqd+dhIGOyCQf0lJruTzA4/2RDYjmbsd/ZHRdoerI9Q/1U2PyObDu/dQfdhx1TAgnzDKZdLHMQbfpPRSZIRcXuB+lBv5R/onabuBvY9Clo6NctcHsJsf9Feppg53Nblf1t1Wex9yRbzdR0Kmx3KAWXtf/CKJ6dvw9qzWTtbKHW25huPdeo6JqLpHtZI4eIADHJ0eP/2vCaSpLJGkAXGV6TwrWjUKcMjd9WLzFvX5C4Pkcev9R0YZeU1XuOl1f5unBP3G4cCruVxXDOpESs8Q5PlN+q7QFbcHJ+TFGWPjdHS3SS6bLZJE5T2TBOgG6JBOU3ugHSTHonQDpJkkA6SSSASSSSASSSSASSSSAZOkmQDpkkkAkikkgEkklsgEmd6SnTHYoDLPrPyis9bflCd9w/KKz1t+VbIPVvWPhA077hVjVvU23ZV9OxKe6PoX9kaj7hQ4j9Znyiz/AHShx/dafdBV0A2CfqmHROcKGxnbFVX7FWnbKq/qnCoDgrtN9kKk4K5S4hCdTOxiUx2CSRwpWdZlR95y0lm1BHjlOJyO307IU2yK3ZCm2TRQDsgyekhGOyDLgFMnnT75+VzusY1WmPsujfe5x1XOa5jUaUjuuR14tyn+2Fn8QAmher9N9sXVLXc0EmUUvtUpzfThj9KqcJfbqbf/AFCrdN/00f0qpwjmOot/GU4q9ugpPvPV5Uab7z1d6IRVOsPkd8LC0reT+ordrB9N3wsHS/VJ/UVNXj0o8T3LYv6wuopP3Jmc8oXLcTnyR/1hdTSfuceP0hUVcnqZ/wDiehHuV2TvRhcbXjm4qoxva5XZH7Z+EEo6eP2+Q+y1iMLL00XqpSVqFKDJNqhMcKY2Q5tgFSSbm1tleoB9Yd1RbuFoUOJgninJpSpmqUvRQat4yTsUSHEreyGiQfeahLWZ6lfpQqDPUr1NumcXCTyYWg30D4WaSAFpD0j4U1pifKSSSSjpkkkAktkkkAlT1J1ogAVcWZqrz4jW9E8e0Z3UV+W7AUKRtgptfdgCg8/4WjKmtjCi4KV9kimnSA2UwU1t01iEgd2VG2VKxTEZTCzSffZ8raWFTutK35W6Fnm24+jpk6ZS0MqWqT+FTOa31OwFdJFly+v1jmRySPsGjytzt3Kjkz8MbkeM8rI4X8QtZMFP+Xp32mkxjcDuvCdXl553gXIabXv1XccVak6aepqXHu2P/Zec6tIYomtJ87slYfExv7Xuuj5NmOPjPpT9b98rbotKMjGu5d9vdZnD1P8AnNQbGc5XrOmaQ2MMc5ubWA7Lq5uXx9Of43D5zyrA0fh4lvO5vtay6Gp0lrqIsA5XAYx1XT0FI2NosNlamgaWm4XJcrk7ZMcfUeUyx8sckbwQ5py0rMkY03hkPl/Q49F23E2miIipjG2HBclWwgkEbFVjSym3PVcDoJNsj/VBBL8tNnjotiosW8ku/Q9ll1FM5juZmV04Zf1x8mGruADJ5gLH9TVONxF7bdQo3LiCLtkH+qf1eZos4dCtGItg8e/RCPY4KQdcYwe3ZK4eCDuOqD7SY4jDk9iLjcFCcS23Nn3U2uPKbZCE/wDQkZuixvLXXwqrSL+U2PZFb524NnBCovt7s37Lf4V1A0mowyhxFjYnuOy5aKWxs67XDqtOmNzzgH+YDp7rLkx3NVeGXvb3akla5wfESHNs7HbuvRdHqhV0LHX8wFivEuFtTfUaazw7GrpsOb/Gxeo8KVTSeUEcjwLLg4L4cni35JubdUm6p0l6DE6ZL4SsgHTBL42S7IBykkmG6AdOmCdAJJJJAJJJJAJJJJAJJJJAJMnSQDJJJIBJJJIBJJfCSASY7FOkdigMp33CjRg3afdCefqFEYSXNHurZI6sMtVfTgPFyrOq7tVWgP1Up0L+x6kfVKCwfVb8otV9woTfW35TKugbkBJM30j4TlQ2O7ZVZNyrLlVffKcKgOVyl+yFUerVJ9r+6dTOxxsov6KRwouUrOs6ozMe60VnVFvHKcTkTdkKXY2RG7KEuxVIoBHlQZfSboxGCgTek2QTzt+CVz2v4qqU/wA266F/qPyuf4jFpaU/zrkrqxa9L9tqqa2P2GT4Vuk+01V9YF6KUeyBe2fTn/lv/aqvB+Yaj+sqzTf9M/7VV4OB8Go/9wpxV7dFTH67grnRUqb77ld6IRVOs+2629lg6YTzyD+Zb1Z9t3wsDTPuyf1JNMelDiQXEQ684XVU37oy38IXLcQnmkhH84XVQD9lFuwQVcu9vPxXCezSutcPpn4XLwC/E4O5DV1En2jfoE01V0ofVlN+q0xuszR8iU/zLTG6Qy7TAwhS9MouyDNmypCUe60KAfV91Qj3Whp4vKSqxLJoy7KIGFOX0hQbstoxSHuiQW8Vqh2U4fuhMmvHurtNuqUSvU/VBwd1sLVb6R8LKIFx8rVGwU1piSSSfokoySfomQCS+Ek6AZZGqn64+FsLF1M3qSFWPaOTpXYLqTm2U4RcZTyCwV7Y6CFkthlSGyg93lQC5h1Svc4VV83msjRuuE9FvaZsok5UZXWBQ433KC37XIcyN+VujYLCgP1G/K3Rss8m3GkmSCSlqBWP8OklcMWaSvPeK6kN0dgPq5Cfkld9qrrabUkC9mEry3iqX8zTU5Aw+xI+Fx/Mv+ZP63+PN57eQ8RyOc9sDyCC8ZHZcTxG8fmrNOy7HXGltfGDm5ccfK4fiB16w3XR8fuI+V+tdV+GNKJ618rgDyr2OmiBtheW/g+A6KoPZy9dpmbLLn98lb8HriizEywCIWXTsGFNoSkK1k6rSCWlkaRfC851KhdT1bqc4afMxx/2XrFQ0GNx6rjOIKZs7xG88ucO6hK+qvH3HA1EHO1wcLPasiR72H/x0K6mvidE4h7QJmGx7PHdYVZA2TMdhfotsKy5MWaTHJhxMbvhOYQ+1pWh3e6Z0ZFw9pBHVCcwfK2jms/oj6c7h7b+x3QXRkGxwUiCz2HdOHAjOQqRUctwctSbYm7T/ZEawEYvb3Ki6MDrYoLSDgQbkf3Uo38mHeZqIxrnD1tt7ogpedp5SAe7Sjc+z8b9JBok+2Q5v8JVqje+nkuAXstt1aqsdLK3Lc/G6PG57X/Uw/v3Svv0qbjvuGZfClg1ClHNG02lYO3VeqaLL+Xq2tjt4TzzM9rrw/hutloKsTxAGE4kb0K9d06dlRRU9VSuPILXB/SOy8znlwzldU/1jp6pG7njae4ypqho1QJ6NhG9sq+vQl3NxzmTlJJMFskOqSSAXynTdkv7IB06ZJAOkkkgEkkkgEkkkgEkkkgEmTpIBksp0yARSSSwgElhJJAJI7FJJAZTwPEKJELvHyoyfcPyjR2Bb8q2c7Q1X9PwqlAPq5VvVfS1VKAXmSnRX9j1QAkKC0eYW7o9UPqlA2cPlMVvs9DfhSUGehvwp3sFDU3RV3ndWDsq7+qcKq71ZpPtf3VZ25Vmk+2U70mdrBUXKQymd0UrOs2o+8VpLMqPvlOJyO3ZDl2RWjyoU2ypNAOyDL6SjE4KFL6ChLzqT1Fc/wASf/1z2eugk3KwuJAPAiP865K6sWjR/ab8Ieqi9JLcdFOiN4GqOp5pJf6UHe2TSm+mH+lV+Dj9GoH/ANwo9L/0w/BVfg0jwqj/ANwoh3t0VPmdyvWwqFP+8OCvdMpoqpV/bN+y57Tvuy5/UuirAfDcuc04/Wl/qU1pj0p6/wDepz/OF1Uf7sLdlyPEeJYP6wuuh/dBb+EKk1zVO+3FFjvyrqKg2gcb9FxjpCzjCHOHNXYVRtSOPsgg9EzA4/zFaTd1naGCKFpPcrSbuiFl2k5BlOQAiu9kF/rCdIZnRX9OH1D1VFuFf031kqsU5NCTZQbupyZaoMWzEQYCnF9wKDVNnrTJqw9D7K9TqlBsPhXqa10HFoWNvlaQ2CzgBhaQ2U1pia6Sfqm6pKLqllLdOgGSunwkgF1xssXUR+1FbXVYmou/aXKse2fJ0hG6wTPddC5uyQNwrZbSJ7IcuyILKEwxhOFWfJfnVyDZVX+tW4NlVZ49hzdbocRzdGn2QYd0fQva7E6xHyt+FwdE0jssBgwFp0UpaA3cLPKN+O6q+kmBuEis24FcOaiqARf6bsf2XkepS2oKZwDXO8zQDsF7BUZgk92kLxjVY/CiqY8t/LvMnsWkrj+X9VvwX/WnlOsNL9Rw7YnP91xPEcfJWv7Fd1rzPC1IFpuxzrj4K5HiiP6wcRY7LX4+WrD+TjvGur/BqQclU3+dexU5uAvDPwlqGwV1W17g1tgcr2Sl1GnNgJWk/KXN65KfB74o3GbBEHuq8Dw4C2bokhLWG26UOxWrq2GBjvEcBYLh9e1mKZv7O2729e60dY06prqk2cWxncKFFoEEbCJxzEggHsVO59rk1042vq56tgcWEnpYLJqKapa3xPDfbrjC7+giipp5aWdjRLGcEjcIk/5dxezAaeiqZ6O8e3mrec+Yt8uxClJTNkbzCPzDey3qzT4YqosBsx5wVXfSyQuLoyHBv+oVzKMrx6c85kLbhwcD7lVntaHYdjst6vom1DQ7l5XHYhYk9O6N3K8Fud1rjltjyYWKxx6SQbqUct73FynewjO6Be0hBwVp2wvpcbLG2wcwFF8Zl8RkD2VNryRm10z5JASC4lqWj2vCt8EtEjXN5tlaZWSSODAInX2DhusS/iNu/PuiNaWgEE8ozdFkLyrchqWtkAMb4iPUGlejcC61Ax4gc82f5XB2xXkzC/xDIJG97k7rp+HqmJ8jWSjw5ScPG3ssPkYeWLfiy96fTHC0g8ExA+nb4XQrzvgbUJJTFHMbSgcpPdehjYKfj5eWH/os545WHSSTLdKV0sKKf/CAdMNkuoToBvhOknQDdU6ZOgEkkkgEkkkgEkkmQDpJJkAkkkkAkkk6AZP0TJIBJJJIDLkv4p+UWM+ZqFMPquHuixjLSrZTstU9LVTocTK7qmWNVOi+8lOhl+ydX9w3VY5I+VarPuFVeoTFb0f22fCmox/bb8Jxuoak7Yqs9Wjsqz+qcTQHBWKT0FV3/wC6PR+kp3op2tBQf0Ugd1F/RSs/VZ09vGOForOn+8U4nI7eqFLsUVvVCl2KpN6AOyDL6SjH0oMvpKEvO5OvysLiX91Yf5wt1+SVjcR5oQenMFyV1Yrenn6DPhPqWaWTPQqGmn9nZ8IlcL00nwmd7YtN/wBMPwVW4M+1Uf8AuFWKQ3019ul1X4LzFUdPqFKHe3RQfvLlf/SqERtUnCv/AKQmiqlYPput2XN6f9+X+pdLV/acuZ0/E8vyprTHpT15vNLB/WF1cX7qP6Vy+t/chv8AxhdTEf2YH2VFXISR83FkLuzV1tX+6O+FzUf/AMytP8q6Wr/dj8IJPSW8tCwK8zZVqBtqVg9lZYLITezkoTh9RF3Qz60yFCv6ZuVn38oCv6aPMVU7Temk4XCg0KZ2Kg3dbMRG7KbB5lEDupDcJk1YPSM9Fepu6oU/pCvUwyg4tA+YfK01mWs5vytNTWmJZunthN1T3SUVkxTk4TFAOkmKXRAOsGuP7S663eiwqwXqXKse2fJ0Byp2+6mG4USMK2Ojg2FgoTHyqVuyhKLBMKL8vVuA4VN/3FbhGAVVZ49mn6oUHqU6jYlDhNyidC9r7ThXaU7Ki30q1THKitsWs0+UJE5Q43eVSus20pzlpB6rzfW6IGeVoGWB7CD+ppXo/RclxPTOjrIKxv2weWUdwVlzY7xVjdV8/wDGlGacxOa0hrdr7rj9eb41PzjJObhexcfacJaeYNabxPJaT1BC8kqmhkbo3jHRc3Bdev47M/8AWO/6xOGvEdXCCA2klwBey9K0/RK9jmOM1iPdeUOmk0/UI54ieaN/MLdQvbeHNRZqNDBUxnyyDPsV0c9s1Z9s/iSZbxvcdRo0ksLGsnfzHutyQ/TuFzsE7WuDcLepniSkJ7LDC/1tyY69qz7OPuq8jmtc9p36JzNaawXLcd6lX6ZRsnoYg9zncoIF7fKNbvo5ddicSxktFRCQ2piH/wCQ7LjqnWS9tweVw39lkR1uq1FQ19W+aUuIIHT4sukrtEfqLxLSUjoGWHNzd1r+OYz3UTmyz9YzTKjrH1dmudc9D2WrTseBd4J6FT0vR/yMnNUQOJHULbdDDMOaMAG2WnBUZZT6aY43usKaERuD2/aduOyDU6Yyqjuyx7LRngfC1xaeeE7tPRQ0yUMkIaLs6X6JSncXFalRy0strEf+VnvPiWuBdeg6/SMlYHNGN1wlTFySEHoei6OPPbj5uLxu4rD0m23dIk+H7jqpMF5CBk9R3TDyyFq1259BAhp5XbHIKPBI5jgDvffoUGcAObi6iHXGOifZdLr/AAzcuYW97bLV0upZYRsbzSgXY53+yx/EvGCjUUzWPa4jlc04I7qMpuKl1XunBuouMFPNfzi1z8L2SgmE9JHI03BC+duB6sO5og65PnaF7dwdViajMQPp8zfhcPBfDluH9dXNNyZOkSSSXc5yS6JJdEAr52Tpr+6XVAOEkkkA6SSSASSSSASSZJAJJIJBAL+6SSRQCx1S6JJBAJIJJIBJ01ktkAvZLrZLKfqgMyYfVd8qbTYCyjOPrFJpyPlUyT1LMbSqdH95XdS+21UqPMwROhl2JWD6irdQrVZh6q9UxW7H9pnwpKMP2m/CkVDWEVXfurDlXkNrpxNAej0exQHotIclO9FO1tQfupIch8ylVE6LNnN5ir5d5VnyH6pTick4zgoUyK0YKHLsUyvQBygy+kop2QZPSU0vO34cbbXWRxCP+Xu+QtiTDj8rK15t9Ol9lyV1RPSzemj+FYrB9B/wqejG9LHbsrlXmF49kHe2BSfuEo+UHg30VP8A7hRaPFHMPlA4NNm1P/uFEO9ujjt+asVe6KhFmrPwr49KaKrVf2iuYoD+0y/1Lp6v0H4XLUP71Nb+JTWmIGum0kH9YXUw/uov2XJ8QXDoT/OF1UP7qz+kKirmQ7/4nYP5V01YbU+y5WQ8vFEPuF01c60AukGhSi1OzHRGYhwYgbfsiMCcRe0kMjzhE3UP17Jkkeiv6b6iqCv6d6ynj2WXTTtj3UGbom4Q27rdhRQnG6YXUgmTTpvS34WhTWWfT+lvwr9Pa6DizbzN+Vqeyy2+tvytRTWmJJJBIpKOmKQKdANuknSQDFYVRmd3yt07FYU333fKrFnyENkM7lFBwhOKpmVsZUZRcJwe6cp7Jnvj86tRCwypOYnaAq2nWgpm4Qo22KsuFwoBtjnZEpWCttZGicGndAaRZNz2zspVLpqRy2siiXKyRPtlTFRndLxX5tTxAqdaxk8T45AC0i2UDxyDuoOmuUeI83CcVUT2wysfnkbYe46LxXiijHLzsbyu6juV9GcQUzainu4E45T/AOF4Vx1TGKF723uHEFeZyT8fPr+vT4LM+K7eYV7OcEEWIXQcJcTDRtJ/KmB80ocXAg4AWLIHyskNsNGStDgDTf8AievSQPPlEZK7rq4Xy+nJj5Y8k8ft1uicRS6rJOZJRTPjHM1oFy/2XquiySO0VskreSRwuQud4f4TotPIdHHzyk3c9wyurnb4VIGAWXNbLd4x2YzKTWV2zQ682VoGmZPFZwB+Qsxh+plbFI/yhKDP/pnw6LSwv5mwNDib3sr4pG2tYbK82xSItsq0nyrKnpGObltnd1mz0MT3+dgDh1W7OLE4wqbm8xF7FZ2NcK5yq08sJMbjY7grNhoDzF4tk9F11RGBcnZUHxNjjBG90p6aeUrndQ544nNkYfnuuB1dn1nOaOt16nWxiaBwtkbrzzWohHK4WwteO6rHlm8XNkWlwcqV+aSx3SkuyQONjlBe8Cc/7LqntwWaGlaJIXfxN7Kqw+YjYq7D53HlOCLqiBzP7EFEpZT7WYzge+6UrgBzWwCmY67TboUnG5s7HMnBfcdlwjWmGqhew/2XuvDVYaeRj4jdr/MB/uF816TUOpZQSdrBe5cE1Qq6VkJfZxHNG7sV53yJcOSZR14f647K9kjkbIxr2Za4XCmub0Wve2IwyHzD/dblHIZIyT3XdjfKbcturpYS65SKQ6JmXdOkkgEnTXTE2GUA6Sh4rL25gp3QWySSSQZikDdOmQR0lAvAKkHB2yBs6QSSQZZSCcJXQDbJJe6WUA4TdUs90rYQDpkkkBnVI+qU7Rt8p6n7pUA44Cpn9i6j9pqo0mJgr2ofZaqNL94InRZdj1pu4Kod1brNxZVCmK3IftM+ETCHBmFnwiKGkI7KvIrBVd+6cKgPG+VOl9RUH4U6X1Jl9rfXKDIfMjFAk9RUxVJ1+VUnfcKuOPlKpH1lVEUWPYocuxRGhDl2KBegP0oMvpKNiyDKfKU0vO5dz8rN1sX06X4WlJuflZ2ri9BKOnKuR1QDQjekj+FoVP2n/CzNAN6Vq05z9Nw9kTo8u3N0v7tPfuUHgy96q/8AGj0+IagDuVX4L9dUP50Q66Rh/bP7LQHpss4G1cB7LQGdymiqtX6CuVo8Vk/9S6qq9BsuUpP3+ce6TTEDXs+D/WF1cWaVv9IXK64ftH+cLqYc0zT/AChMq5Wq/wDmWmN7YXSV/wBpg9wub1Dy8QUh910tUObwvkJBqR4jb8IjAoAHlHwiR+lNCRHRDsOZEJsChndMjjcK9p/3cqk3ZXNOP1U8e05dNRu5UQLFSCTRuVuxqbdlMKDVIbpk06ceVvwr8AyqFP6W37K/DhBxZjF3s+VqLIDstPurB1FjTYhKza5lJ20ExVFuoxucBylXWuDgCNip0qWXo/VOkkgySSSQEX+krCkN5XfK25jaNx9liE+clXiz5EuiC690e+NkCQps6YJyNlC+VO6aTXCQGLobnZsnvhB6O5Qx3TPdhDa7KcKj9ENx3UxkKDmoKog5Sc6ymGqMjDbCZbC8W5spsdlBEZvsrEUWE0y7POC+BwH8K8U43ibUUNV4ezXOB9ivceXFrbrxyspn1Z4iiYOYQvLyF5XzrrPGvV+D1lHitJGZTOwGx5Df3W7+EMjW8YFjjYviLQFkSRvjlkc0Wax/KfgqtoNedI4npa0GzGSeb4O66p/qWM7/AJyl/j6bgaGgYQ9SNmWHRFpJmTwxSxOBY8BwI7FQrm3aflc/06v+Tn3ycr1Yo9Qa14a82+VI0zSS57mtA3LjZQloGTsLonNcO7TdTtrqXt0dPKHtBBVgi4XO6FJIOaKS55Da66EHC0lY5Y6uleZvZVHx22V6RVnDKmnjWfV8xYQFVlb9EXaVozi4NuqqEfSIIuQkuVmTWJ7XGVwfETAJXfK9ElF2OwuD4hZ9ZwO90Y9nfccTVx+Y8ubFVagWmF+oWjWstN/dVKtoMjHW2C6sa4c8T0v3gPZVJSWVBz1yrNMQ2W56FV6ttqtwvh2VUvtnZ6EAs7yW82QCitbc7WVRxcALHA2VmCU4J2RRF6nuZWjBAwvTOBq40tTFE8lo3YSvM6dwcLkAuv8AC7LQKksEecg7OyuT5E8sXVwx7uLFjauE/wBYH+66LSqprotxlcPwpqjaiLkOLjYrchf+XqOUYjd6fb2T4eSa8v8A9sOTCzLTr+YG1iE6wWSuweYq5BM+7cldev4y82mmJsCUhlQleGixSVar1FZyXDQsuor3uJuf7KzVWOQs/wALmkytcZGGdtWaMvkeCbrdYLNAVSgja1uwurijK7aYY6hJJim5gOoUtElVqqkRggbpVFSGNIbusiR7pJCSqkRll/FuKUvdclXYXWcFn0+6uc4DQmmLqWVS8ZwwE4qXN3yp0vyi4koRSCRtxj2RAkoydNdQllDDa1ygJ+yc4CA2e/RGDgW3RopdknSukg2dV/cIQ2DZGqvulCB2VMr2PX/Zas6n+6FoV2YGrPhI8QFODLtZq9xZVCrVQbqqTcoFbdN9hnwilBpD9BqK42UNJ0cqvJujXuEGTdOCgPU6X1FQffKnSjzFNP2toD/WjlAd61MOov8ASVTPqKuyHyqkfWqiaKxQlGCiR7boUvVMUE7IEvpKPuECQeVyEvO5Nz8qlqYvRyj+VXnjzG5VStF6aQexXI6YzOHjemFlrS+k/CxeH8REe62pNiiLy7c1BflqvkoXBn3av+tGbYOqs9ShcID6lVb+NEFdAf35vwtBqz3ZrmfC0GnCaarVXoOFydN/1GcDuuvqh9M4XHw41Oce6S8AddI5GHrzBdTSG9Gz+kLl9fxTg+4XTUBvQxH+UIKuW1g8uuUh/mXVcvO6JclxCeXVKQ//AHF2FOLiMlMVodFNm26GESPdDMQjF0J3qRD7IbvUEwQVyg+6FUGys0H3wnCvTXSbuUgM4SGXbrdhRGjKkFFubKYtdMmjT7NV2LdU6fZquxboOCn2VCZ1nFXztlZtVlxVYozvo8L/ADYW1QT/AKHFYMF7rRhdy2N0ZQYXTdSJtuVRjq8ZUzNz/Cz038ot3906BEbkIwSOXYVUbQuWJ+pbVX9hyxGepXiz5OxNwgSXBVg7ID91UZ1AAmymcBRCd5wmUC5c3RLANVaSQAnKmH3aLJVUNJuhgjmUnm+6ryEt2SnZ5T0vMkFsqfM23RYxqCDZTFSeWy10w8ms1zAEi9vssd1URdC/OnuiQXJt8zERj2rBFYb7o8dVkZRYJk2XEBjiOgXlOjfX1DixzdnXb8r0eoqRHQzyHAawleb8HscabX6x3rllIaO68b5+X+pP5Hr/AAsf82/+nkOoQeDW1kR3I5v7rkqpt6h4IwV2k0h/43qYksfK61+hXHVAvO6+Mrp4LftPyJt7D+D/ABP+e006TVP/AGqmF2E/qYvQ5Gvkb5Df2K+WtM1Oo0bVqbUKRxEkLrkfxDqF9KcN6zTa5pcFdSOBjlGR/C7qE+XDxu/qjhz8p4/cV9Q0ptbVtdUukLALBl7Nv3TUtA3S2PhpARzm5LnXW1M8NANs8yqVc0b34c2/ysXTLb6H06ERtHUncrSDrNWRBKRb2V0TYynKiz2K93uhOKRddRKDkReLhVXCzyrllXqBZpI3CCZczuUSNPTK4zXmAvc9dbqEga7m9rFcrrDhICxubqZ2216cXUN5pXHdUKphLAbbGy356cMN7exWfUREgi1rreZOXLBkwG8hA2P+iaraRJzb3CTRySkHHZWZWCWEO2stN6Ya3NM9huzzZcNlOJ3mLTv2QrFryDgqbXEPDg3cWITqF+C3OGuOe66XSZ5aZzQ4XZcZ3C5eB7XiMyYvgn3W7QmSNgbfy/pvkFc/L7mnVwvUdBrH0sscgs6FxubdF6PAWVVO18TrgjZeO8O1TH0nI4OZKzcbhwXoHC9eI2tYZA6I7ZyCuHi5Px5+N6rXmw8sfKdusppS0WfkjDh/5WlG4HlLSs6wcQ7qRuiRyFh5SbdivVw9TX087L23GTjlCr1EvM64VD8xYepR/MDutpizuS04XUWss5VvzQ7pGqBO6ek7jUjm5BYKRqXd1kfm/dM6rHdLxPzXZqp/QoP5h56qi+fmOEWAFyrUiPK2rBcXbpBuUVkPluhvYWlLcXoVpspGRVy5R584QNrXPceyRfhVjJYIbprIkG2jDUeGVbbWx2ysAz5RoCXnZFxgmdjYdWst5UAzc590LwvLcqPpwVOoq5X7WWZKtx3ACq0tnOV9TV4oFxHRISAm3VSPuhmwchVUqq/iFQbsFOq+4VFg2CbO9i1n2G/Cz2XDxZaVb9hqzW+tODLseTIVco79t0ByCbNF+7tRH7IdF+7NRXbKWs6Jt+VBk3KM3DEF6IVAep0vqKi4p6b1pl9rhQD6kcqu71FTDqMpwqd/Orchwqn6yqiaMzZQlyDZEjwEOUoCv8oMvpNkci4QJfSU0vPHDzOVapF4X/BVp+5QZh9M/C5XTGDoDrB4/mK3H+lYWh2Es1h+sreOyUXk5d2J6oe6bhADxKq38aU5tW1I7pcJg+LU9uZENvP/AH1nwtBqoSC1bGr4TZ0Gp9BXHf8A/Wl+V2VQPI5cbIbazJ2SrTALX/3bfqF0umf9PiJ/gC5rXf3ZwXRaRnTof6QmVcpxUeSrpn//AHAuzoDzxxH2C4njXDWEbiQLr9Ddz00Of0hAbGLKbN1A5GFOPfBQzEdjZQcMhEdsEN3qCdEM7DcI+nn6zVXcj0ZtK1Odlem2Ljok2yj0907DfC3jCiNUwmb8KQ3CZNGDZqvQ7qjCPT3V6P8A1QYhWbUHzFaD8KjILm6rFOYcHqCvtthU4x5laYU6WKR39kaN9sIRITXthI2nTPu4BW1jQTcrgr/5xobcqLGmOX9TrXAQOusNvqKLXV4eSAqMc1zvlVjNM885aunLUN/dOHYQ3G7kytNsmccXUibobyLYTJVmF0SEWahyokPpU1cO9AmuQjyXFlXeUodVHMAcpcmEnuu72SDloy0i9lwq7oru2Vwm4QycolFiuI8hWacHnsALe6bqjwiwunaUiGsPEejTOf6SLH4XG6LePhurmddviFzmgfpb0XQ8by+HpAhDuXxBb/KwtTc2g4bZED+kNPx1XznzM/Ply1/6e98XDx448TrXGn1WucQTzXyuam9RJ63N10nEJ5aqofcEvAI+FhaqxrHQhl7CMXv3Xp8F9Ry8893TIqAAGd11f4acVO4d1cU1S4/8NqXWdfaN38S5WTLrID2kix2OF12TKarj3ccvKPoTinVamgqWPY4uo5Wghw2XI0uusq66WFz54wwc3OR6vYIf4ZcVw1sDeH9b5XkC1NJJ+r+Urp/yUETywQtHKbHC4spcLqx9L8HlnPx6xvjr/r2yH67VMYP+HPmc8/8A1tgtPRa7iDUK6ICdjIWkGQ8u47KcemmrnDY2hrL5IC67T6KKlhDIh8nulsfKvHxzxnutCM2RLoQ8oTgpPMEugzEWync8AFUKyray4v5kW6Em2Zq+Gu5Bk9FzUw5SecWud10MpMhJO6qSRh1wQD8qZW305yaESMdaxWPWQ2aRbbK6epo2+IS27fhZFZTvYTcgqpUZRytbBzWc0b5CHTv5oXtIy3cLWkj8zmkY6eyzDE6GqLreV2CtZluac2WOqozNB23Q22dh2P8AwrE8XhzG2OqFMzct65V7ZWJBjmst2N1raXVvYAAbjsdllUk4tyuF2noehVhg8KTmZtf/AApzm5qrwuruO40vUvAkEpZYdbbLv6OVj2RzxNaI3fwm2V5Pp0okwfS7HwV3PB092SUE45iReO53Xm82Ort3S7j0zQtQbMwQPJDx3Wu7OHbLg9KlmbVckjhcYJ6rsqCfxrxPIErRv3C6fjctk8cnDz8XvcEcTkf6oHM8EhXXMLSDb5CUg5tgF6WGWvThzw37UAX8yYF97K2IxzXIATcg5sbrTbLxVSXc26R5r+ytGO590/JdLZ+IcbTcFX6fFroUbLo4hdYWU2rk00YXiwF1OSMO2VKJjmhWY5SDYqWkqEtMeiB+XN1piRpGUuZt+iNnqMyWKwVKVpB3W1UEWOyyp/XhOFYq8tyAtfTorkLOAyFqUDg0hFKT20ZY2iPbZZM77OWnNKCxZczOZxKIef8A0LTTWddaH5kBt+qy42W6ZRHghqLCxti6arCiyfncMrLc4g7olPITIAnovNcqcvTMNk9QLkdU0YyApV9jVv2GrMHqWpW4gb1WWN0QZdjE4QXdUUnyoZTJr0P7s1Gfsg0P7u1GcMKftpOib6UF+SjAeVBeiCgPwpUuHqLvZSpfuJl9riru9RVgqu7cpQ6hJ6VU/WrcnpVS3nKaaOxDlRGIcqBele/ZBl9JR+hQJfSU0vPX4J73QZPQUd+XFAdsVyulz+kYrKgfzLe/SsHT/LqVQP5lvgnlSi8vpydVjUqgIvCotLUf1INebatN7hWOF7iaf+pAbc2KyIq+3IWfV4qIT7rQbsmmh1HoK4qpNtbdjcLtph5CuJrzy65YdkqrBHXM0b/hb2hm+mQn+VYOtX/Jv+FtcPG+lQ/0pnXNcai8Xw8Lq+HM0kR/lGFy3G37u422cF1HDBDqCJ38oQV6beemESPe6HfKmzG6GYzrcqE4DmxsjfpJCCd0xDFFpj9Vtu6EVODErflEFbx9AUWb4Uj9sW7KLNguiOejt2ypgXKGz3KI0ZHymTQh6K9EqMeCAr0W6DiT72N1Re4Aq/Jhp7rHqJLPKrFGd0O1wuiB9vhZ7JTfKJ4uN1Wk7XfEsN0KSosd1VdNhVpZSSlpNyaEVVc4Ks+JzBY0LrOurjJrbo0cyPUde6BE/ldlPNM3Krh+bqk2tVknun57uVCOU2F1ZY66WlS7GLuyE4lEAQpMXCD0C8XRYgQEzQDhEtgLO1tIHKcoEmRhFl3Q+XmQSk8G9gpsbb3KM6IbpsXV7RQ3NIQiDzGysON0I2vlOJukGg3V6lYXSNHQZKBC27sdFccRT0j5B6iMLPm5PDG5NOLDyykcrxNIKzV4YMFrDzu/tssXimTxJIKQAecWcB0utZnnrnyuBLpDv2aFy+q1QkrpCbGed/hQjqB1cvmpvPLb6HGeMn/UedcV00dPJCyIXkmkub/w9FympuBme5riW36rq+Onmn11kcbieRnKB2XIapy+OI4XcwwL9yvZ4P1jzebus9o5pb9FFwu49gVbfA6GUMtuFB8diWncLpmTnuPrSmwOY7ma4te08zXDcHuva/w44ih4kpvyte1o1SADmP8A9Vv8S8d8PyHsjaJXVGlatT1tGeWaF18fqHUIzxmcHHnlxZbj6dgo2R25QB8K02MNWRw3r1JrumRVlI8EuHnZfLHdQtYyhcfTt932T7BBc8AEk2A3usvXuINO0amdNqFQyOww293H4C8Z4s/EOv1ecQ0JNJQXtj1P+VeHHln0nk5cePt6jq/E0LJjT0LhLKNyNmqtRSSTO55XEuO64LQpPGjYQc9+67PTXmwUZY6rbjy3HQsZ5UGVm4tupQPuBdFcBZQpmyxAg4+Vk6hBdpx5hst+RtwbbrNrWAsN+qJQ5KrZZ11XqqcSwc7B5gFp1MZJIIQKSwLo3jBVy6RZtg1VP4kDXNAJWdEbP5JOq6WSnMcjmfofkexWJWUxdI9uGyt/T3WmN36YcmOvao6JviEE2HcI0PO1/KRzNOyH4rHt5JhyPGD7ormnFr2sqqJruNPTrNdeN2erV2WkyEeFPHfnYQR7LhIWS8oezLgul0PWhE5rKqJzBexNly8+FvuOniyk9V6fNI2cx11MMSAc4HRy6Ska6opYy08srBcOHXuFymiujdARDJeGRuQei6XReaL6bnE38zXX/wArPi8crq/aOWWT19N6Cfx6Y8x+o0WKM0XaDbcLOqB4ErahmGO8rwtEEcoIOLLv4rer9OHkn2GQL3smt5sBTvdyYnK6YwqJ9ScjZIkXTlMaGgHdXo+WwVCO+LI/nthTVT00GBpCi+IdFVY5w3ujslPVJe0XNc0qHnurgka5IlgKBpTk5i1VJd1qTAEYWfKy5QViu0ZVyI2sU9NRST59Le6UzRBJyOcMJgTnJNjsnJHRV3SN6FN4gvumnawDY4UybtVUSNvuismZ3S0ew5G5Sp2/WbZEL2EmyeEfUCey0tT+oKDMFSn9QKG05UqvaxWn9naswbrSqzenas3qnBkK23KhO3PZEbsVA5JQTXof3dqsEKtQ/u7Ud5sFP21nR+iA9GabtQH9UQqDIpUvrUX3tdSpvuJl9rZKru3KMc3QHGxKR00mQqn61aecKsPUU00aNQl6qcQuPdQm6pi9K/8A4QZfS5GPUoMp8hQTzx+SflDfsiO3Pyhu3XK6I56n8urzt91vD07rB9OtSe63WekJReXUclqmNYfnduytcMfem73VTWzy6znq1W+GR9aY+6Y+m1XfciPurzD5VS1AYjP8yux7XKE3pGb7ZXEap5dcHwu4ly0rhtaPLrcfuEqrAtXF6N/wtfho30qEHssjVM0jx/KtThU/8pjtlM6w+Nx+xS3+V0XBp59Ihd/KFg8aC9FNjotrgQ82gQOPZCa6UdFNgucqAU2XQgdoxhBIuSjDb2QdibFMIlTh+635UD0RIh9RvygNzPhhMxS/9IfCUeV0Rz0Znwpt9YwoM7FFYPOEyXo/UrsWypR+pXYygzzGzCsWpbclbMp8jlmyMunLpOWO1FrfdOWn3Vnw8p/D7qvJPgqiIlOYMXKutaApuaLKfI/xsp8ZabhRLnK+6HmKdtKLG6flC/Faz7OPwkQVougAt2QZYrBOZFeOwCMEq5Dj4VdvlOyKHiyVyqscJFoOUJM3QDMB1ypRuLyiHf4K1htcKR2Umu5W2KYuCjbX6AeCSnazFkXBU2tBKaAHs8qr+ESbjZaD2t2Cg0DmVRGU2qeASMKs6F/MtoNB6JjA3dVMtIuG+lCmpnCxebewQtVe54ZBHYB3qv0C1g3kBJxYXK5+oeXwT1BNg88rfhed87P/ADp2/Ew1dsLWqmKjpJnlwijtbnO9lzOiUD56o6rPE5oeOSmjd+iPufcq5WNj1rVCw8z6Gjy4dJH9B8LU1qQadoU9UT542bDudgvJ45b09bK+MkeG8ZVAl4jr5f0h5aL+yyuH6D83rPM8GQNaXWCtywPrtehjlBtJJzSlbmh0vg1+oSwM5YsxMB7d16tz8MHFjh55ub1GFoq3cgtZZcjCHOJ3JXQ1cfNVSW6YWRVMDeXm3uq4svUHLj3QhDcEAbqjALzEHoteKxa7GQLhZkkZZWOA9LhcLfG9ubPHqnptQrdLeZtPqZKeTqWHBV2XjviSSIxnUn8vdoysqs8kYWe3/da4zG+7GGeWUusaJPWVFZK6SrnfM/8Aie65TG5jPsgtAHOOtkWO/KL/AN/haVlju326zhOrsWsccr0jT3XaLLxzSpDBUAtvcL1HQasSQtN7rh5pq7er8XLeOnXUz8AFXW+YZWXTSXV6N65q6tCOADSs6tZ5SWj5V9zsKlUkkI2NOZrG8rjus+ouHCVlxY2IW3WMubjqqBjBPKbZV7TZ7VnuZNHa4vus7UIRUlrTZs49Lu6t1VM6J94xzN6hUnzQbSNcDfYnZVP7EZfysOd7WP8ABrGm+3ONwgPfPTCzJGvYNgey3KulgrYeUu5ZL+STofYrFrqKro3AzMPKRv0K1xyl9ObPGz3E6TVW8wtI6I9jsul0zU5XttNFFVQ9eU5XDyRF+Q2zu/dFpAGSgvL4yOrTZGfHjlCw5Msa9t4eqaaQAwCohH8J6LvKN3kY5hMgabr55oJ61xAo6idpPpLTe59wuqoZ+NqFondQy1FOBcvBDSFxXgyl3jXRlnLP9PeWubLB4T7tuL56I9FzPpw15u5uCVwHAvFr9RDo6uMtLPUHDIXdwRufM51O9widlttlvxclt39ubk49TS0W8uR1UD6lJvMC1sw5SdiNipmMA5cF345bcmWIJBuFJzSihg97JyRfZFyLScDcDursYBCz2SWRm1GynyhytANaQoPi7KvFOeqOJQeqNr2G67SheI7mARpXgoIIDk9po1zZBkdlEDh0Qni7wkpYqdTNNStDGee1rrFdK+V3O9xLii6vIAGAlV4iHEALST0yyttTs73T5CPYgBQcLolGkG3KI1jrbp2hTaClTkDYXB4ur8D/ADtuqb2ZuiU9/EF+6NiemnUbgobTdTm6fCgxSujVX7u0LPvlaFT9gLO6pwURhCi5SYVEoJq0BvAEWQoOn/YRHqftpOk4/QhP3KJH6ChuObIFBenp8SKL09OPOmn7WjsUB25ui90F5RFIPOFXHrKM44QW+tCKsRbKEvVSiyozJn9AHqq8vpKPmyDL6ShLz13qKG5TdvlRIwuV0OeqvLrYNtwtph8mFjagOXWYj3C2YssSaXqOS4hHLrLCerVb4bP1pflVOKBbVoSeoVvhzE0qYnTe1AfSYR/EFZi2Cr1/7uD7hWIfQPhCPopPSVxHEAtq8J62XcyelcNxJjVYTslV4m1DNI63ZaHCRvpbb9yqFbmkd8K5wh/0638xTOqXGLb0k2f0lavAItw7TlZvFgvTS/0la3A7OXh6lCE10LVNm6gBZEZuhI4GN0DFyjDAQdyUyRtYqcd/ECj1Uo/WPlAbn/pDKlH/AKoY9Asixe66I56KxFjvzj5Q2okXrHZMl5g8yuRqm31K5FsgzT4YVRc4K9M3maQFVdD7I0N6V+YXwpA32UvAtdSbFYXRoeQdz3T3PdM/CjGbhVcUzP3pYj3yjCwCA0YRG3WVjeVGUgKs452wrEjSRhA5CE4m+w3xcwuhOiPRXRlh7oVsp7TpVEBDrkqzC2yc36p2Duq2WtCWKi/07qacsuFM7XelEyOa42KsxvcB8oRh82Vaa0cqusJuq883Lm+UGKcl2UeaJr3CybwbKoV3saObKsseXdFQDeQ4VhjyQpyXihqctqYxtJ5pDy4XNcVVQptPMMZAdy2HcLcqnB1W3mvaJpdhclqkvj6lHGQHkeZ1+gXkfNyt3/8Ap6fxcfcPo9E2n07lLbvcA95HUrnPxR1HwtOZSgkRhwe+36j0C7rk8Ollkdi48vwvK/xBqIpKRk093PeXNDPjZY4Txum1ty/1XC6AC/UPzcriXucRc7LttJpx/wAPnlLepH91yvD8Phz0zHZO47G+67mCNrOHamVpItOWAK+bO3a+PDx04OaIcznG13ErA1Vga5gHe66arZ9Qf5wua1skVGLYW3Dd1nzz1QIZBcO7YKiWh0r2u3blqqCXkmLThrxj5VxgL3Md+qy676ccu/TJ1TytAVEbeyu6kfG5nCwdzWt3VOMXYebdb49OXO/6QAFyN8KfpLRmxCZoLXuv1Fk8ou74CqoxXqJ+Wuxdpsfhd3w3Uctm9O685o32mseq7HQJSHNANwufmjs+Nl7em0bw4Cy0Y/lYGmyXjatmF+AuKvS7W1Vq8NJRw7Cq17iIiUgyJXAlwVV4AcbpnyHmKgZWnDimmncwPF7rOqqWN/qaPlXTM0A5BCBJMFcLXpliBkBcC3mY7dqtDkEAZIPGpT0OSFMujkOQhtLYDdtiw7hO+0yaZztKgqC40hIt+h24VN1A1jy0i/zuugfG2YGSFhcR/BuEaGNtUwMqYnO7OAs4JfksL8cZWkUwimD4i9hHZdnDqNYYRHJO90Z3Y5xyqNHpgjBMMgN+jsFXY6VzB52kHvuoyz3F48enY8Kth5uYwNZcXcAb3Xb0upCO3KQANm22XBcKxubTSPeBl1gR2W415uc+y3+PPHFwfIvlnXTjW43TtjmtnzG+9lY/4npshsWuae4K82qq4v1WYB3lYAwW7q3TzPcLkq/y+9D8H+d16LGyCcXp6gH+V2EKaOWL1ggd+i4lla+K3mWhScRTQ+VzudnVrshX5y9s8uC/ToC653/wna/Kr0k0FcOeB3I/d0f/AOlZEQA9RVyb6c9xsvsZsmE4mzhB5cHzFQbHY+spzE9rgcXKzSwtkd5is5l2i3OrcE7I2+Z3+SiY6PcGqXw07+UuH+VGGqpvEu8iyx9TlbJKCw3VRrirmMK5XbU1l0VTJ9LZVqZojIuq/iFOJD3VJ+9tcSxkZtdIvj6WWWHmym15ulqHtosbzZCK1mFUpzcZKsXHf/VTYqVNwsMKMYIkCiQD1/1TxRt8Rpv17paC/L0+EzSpS2FgoN3Qoao/dws/qr9R9gKgQnBU2KLtypM3UXboJqaefoIryLoOnAeAivAupXOko/QhPRWehDfZBgP3TwG0ii5PD68lNP2s3wgOOSjG1kFxRDDN0EetGch9bppo8ShN1SYbBQlNwg/oHvdBl9J+EXohS+koS8+d6ioHqpu3KiuV0MDVsalAb7rXh+2Fk64LVdM73WrTn6YSjS9OT4u8uoUpVnhzM8nZV+NBaqpHe6Pw2frSJiOjrs0pRoDeNvwh1g/ZHfClSG8LPhCPoV/pXD8Vf9Qp/ldw7ZcPxaAK2nPuiqxKpF6Uj2Vjg4/sLgP4igT5pT8InBpvTSjqHlCqXFIvTyfC2eEm8mhUrdjZZPEwvC5dBoLeTSqdoFvKhN6aI+VNm6gNkRm/smkYbe6D1KM3qhOwgkDhSjPnb8pj0UovuD5QK2f0hGjAshbNCMyxAyuiOeiNwjRZeEEI8H3BlMltm6uR7KmzuFbj2CDOSA3KgXt7oVY4tZhZZnde11eM3GeWerprF7ShufvZAiJIBKaV/KEaLy9bBqnnNkOlc47nqhSy7glTojcp3pEu8mm3IRGiwyox+lTFisnVCIFkF4FsIrge6ha+6NGhH1Ci5udkVjfNlELBcI0lWDCU4ZZWg1M5qIFUnKmzOFJ8ZJFgnYyyeiBdgEqu6oLQbq3I3dU5IQ660ZXf0aKa7iVYD7oEcPKiHCBNme43RoyQFW/WLFW4mYzuVOTTBm1L+eWpabhpAaLLmaYNNZUzsu4uPICfZdRWx+HPJ2JBC5qiLIKSQv8AvRzux2yvK+Rj/Xo8F/jVqWObSwCY2BY5w7kLxnj9/PLSw3vGL8q9V1Os8WKBvNlrXgf4XkPEj/HnhcSLtBusblPKSOniwvjbQ9Ob4VbCSLljRZdXB/8ALNS05Il51xjZryRkHdoyF0lHPzaVUx5Jc3crLkl7dOOnMVB+vvuMBcrrPnqH2Nit6slIrGXN8Wuuc1Mh1RLy3JXdwT7cXyMtxkTvPhscP0uytqmv+Skk7BYURLvFY75C2IHFmgj+Jzt1159Rwcd92sWrJGNze6aMCTc57qFU76oClGMHC2+nP9ney0zGnB3Ki/HMf8I8Z58HJAwVXkBcbNS2ZUTOaa/ZdFpMhieHNuc5WVptP5Xf6lehaLobTSsfy3uFjzZyOr4/Fa09Hq2ujFz0XQU8wNsrnW6a+B5EfytCmEgIBuuO6elI32vAG4VavdzMs1AY5+ysMjL91J6c9UwSWPKFmywTAHddrJSN5dlTko2knCeys25NsctrEFL8tM4WHVdU2hYf0oraJgGwT8h4xx7NMmcfUQrkGhudbncT/ddOIGNtYC6WAcJXKiSM2k01lMeZmCtDliJHNGPkKRsTndOwCxSsl7MN8Tebym4Q3Nc0HJCslnVR8Mvx3NgoodToUPg6XD3I5irbTYFxOBlSgZ4VLG0dGgKtXu8OhqHjcMJC78fUeRf9ZOap3gyyyE5e8uWxTVDA3JXPQuIjb8KTp3AWC4pnr29O8cs02qqsYNis+SsN8FZUszi7coPim6dytEwkdTo+sup52nmOCu3ilFbCKiOQ2d6hfYryKOQhy7Lg/UnNk8F58jsLfg5NXVcvyeHc8o6zwn/xu/ym8N38Zv8AKO4Juq73mh+G7q4/5UhGb5cVO+U4IQEPC91IRZvdTunBymERH7qQjG11IHCmCEBERZwVMRBOCpBAIRjYIgj90wNhjdTaUHDiMd0aFgD2qAPZTiPnGVJr0xtYKLDlNKbkJRnKSh6g/QCoHdXJz9EBUibFAqY3TPykDdRccoDV037CK+yr6cfoosjuyX2udCMwxBkNlNh8iE87oFDdkpRW50zlGI+ZNK4SLIDjkqZd5UInKSjHqobKbihE2Qmig4UH2snYVCQ43TAbtkGU+UopOMoEpwUE4E+oqPVSJ8x+VHquV0MPiAeaB38y0aU3iCo8Qj6UZ7OVyizC34SX/wAXMccYNK7+ZG4b+8+3ZD48FoKd3Z6XDB+s7PRM46ufNK74TUV/AZjopvF4HfCjRn6LUI+hn7LieMR+0U528y7d2y4rjUZgdtZyVVig/wA1J/ZPwafJUDs8qDT+y/2T8HHNU3+ZNVW+IReErotKby0MI/lCwNeF4wPcLoaDFLCP5QhN6WwMIjNwof7ojM/KEiDZDPwitGEM9UyQOylTi8rR7psolMPrsRBWvsAis6IeCQiN33XRHPRQjU/qQRurEOxJTJZjVthsFTivhXGelBwKpF2C4VExNO4V2qdytCoOn5dwtMemOetrsTAGDCo6n5WHlOURlWOXBVGvn5mHKU7O9MiWV4eQSrmmSuLzcrPkvzXVzS7+KbrXLWmeGN26anuWottkKl9COThc7qQfgKDT/hKQ2BCECnotrDTlTdthBj8xVrl8uyVAbU/LcqQb0vlEDTbCRheGepSMV9yigWTHZMKr22QX2urErrHCDa5VRFBPsokX6KyGAIbhlUm0ER+a6twkgZQDhOJrWCVVjT6lGPyzqki/h9O6891Op5Kud4IEcvmuF1/EmpeCxsDTkC5XAatzOY6RguNyOy8j5t8r6er8PHXuqE+pmwY99+R1r36FcTrflnfym5Djf+6LqNX+VfI9xwT5QVn1E4nFmnD25v3XPx4Xt255SeoE6RoZE5hvYZWjT1pMIs6zT0WE11oywixF901LPzMcwm2FvePcYzk1Tai9zaoEdbrnayVwqnm5sStyocJc7EbrBrhYiQfBXVwz04+aqRFpjbYrWjcDpMTQdnG6xnG0jSditOmcDQP/AJJFvl1HLhfdZFYOWfsUUizAb5O6LqEQEgP90MeZtiMhXv0zs1anECZCR0CADvbpue6LzloJG5USw8zQ35KB/wBN7h2EFvmGDles6KGNgaz2FgvMtDjszGML0vSmtDI3DblC4uW7r1PjzWLTNM11zb4UWUzb3srjSC0KXKFjtvtW8EDoiRtDSiuAsoHCAk+xbZAe0dFK9knHGEtgICySlfuooMJ5JKHbKsFuVHkwlQDyojAAMogYDa6fkz7JWhA2KnC3mniHdwTWCLQAPr6dv8yU92FldY110o5W2CzdaNtKn922WnN1wsnXyG6TIT1IC9HL1jXk4T/Uczy+UfCG9oRyMBDcF5z11V7NyglmdleLcIfJlVArBvstDS5jDUNN7ZVdzLbJMPK4FVPVTl7mnq1PMJKeJ9/U0KfP7rP4bnjl0mMyEcwNsrSL4L7henjdzbxMsdWxHnUhImM1OOoUfHgvuFW6nUTEimHg3QvzUHcJfmoe4RsaHDxZSD/8quKuEdk/5uK+6PYWg/8AypB/ZVBVRkqbahiPY9LYepB6rCob/ZEbM0o9j0sh+USN/nCrNlajxOBcEezXZDskx2VGQ7FRYc90j2sym8Kp3zurTz9HsqV83RBRWlM4pmnCZ5TDR091oiiPdcqvQu+kiuKSpfQrHeQobymDsKLjZIbRceijGbOUXFRYfOmSyThR5kicKHMgJnKC52VJzsY2QXIArXGyi511EFMTvZAMSbIMnpKKD/hDlPlKCcEdz8qJIUner+6iQuV0sniAXpgexCPp5Jgb8Ieuj9jceyfSnXp227JfbSdMLj0H8jEez0LhZ31z8I/H3/SwR0cFS4Tdeb/tTKO3OYTbshUn2hdEb9o/CHRfb/uhKw7ZcbxsPoRns5dkcgrkONh+xg22cEqeKlC69IPhLhA/tFYD/EoUxvRj4S4SJGoVbfdNda+tC7Wgdwuho8QRj+ULC1QcxZ8hb9OB4bLdghF6HF0RozuoBEABTSINsoV73ReiGMhALYJ6XNSmcbNRNNbzTE9AnOyy6abbk4R2DKi2wCm099lvGCbd1YjNoz7quCrF7MamSxF06K43ZUYcq830hBmlALG3yqlVE1zdhdTrKgQ8oOyCKhsgHKqm0XW9MueNzfThUJnOJs4rfnYCzAWLVgBxwnjdll6V2tuVeoYi16FTAEjC04WgIyoxu16A2aAjF11XjIRgobRB+yADko0hwqwOVURkv0217K0XWjVOld5Ucm7ClRERL5tlbabt91ntb5wtCEY90lQN4yhkIsuEB7wkA3tuU4alzZS5lUZ1FxwUA4Rj5hhRMatNgMnpQAfqBxwBkq0WXwquqEQUMr9iRYKM7qWr457cXqtUaitkJNxdU3nBBG6i515XE9UznAtFt+q8a3d29vGakjk+K9C/NROlpm3NssXnrJJaWYRS3AbixXtL/NsuS4u4ejqon1NO20rcuAG6rDKY+qM5v3HFVJIc2UbbFUC/wpnOblpN1oUgDHfl5z5HizHHv2VfVKR1OBE4Z9V1vjqXTHLetqYm55D74KqTNBD2EIgeYy4lt0pgH2e05K2k058rvtiPBDi3qDi6u6XJzGWEn1i/91GphMnmb6huO6rUv06lpJsdltvccv65LdU0vhIIy3BVRh5RdX3u/WfQ/DvYrPla6N1t2koxp5z3sgDdt9ro1O0mrt0TNFwL2Ks6eCKgg5wnb6PCe3T6PGLkDblXeaSQYIrdAuO0SPley48pba667STZnL2K8/kvt6vFNR0EZwEbcKtHsrDAo2szlF2ER2yGb2S2aBCg4G/spnt1SAKRoWT2UuUojQkAmtT8t8IpamaM5RskAyyY7Irhn2UCgAnCsaO2+qwDfcoLrKxoAvrDfZpVcf7SI5fWFdTLflWJxc/k0j5e0Lbl9N1zfHL7adTNJ9UoXdn+tedxTecY4kBaE/RVmPwph68562hbJiEzDcp3Eq4mxAlCfhFKG9NLsOE5OehkYc8puthwAXN8FyeeZl9xddK5ehw3eEeXzzWdBcMpAKZTBaMDWSskl0TCSk1QU2pkKxFbuhMRW+6ZCt+UdiA1FYUyo7FahOQqTTn2VmI7IC+92yeM2QXO2ypNO1ktKWnn6e6qOOUdx+mqt82SgtFBUHndIHKjIUwv0J+mivd2VaiNo1N5yl9nL6WGm7UOQ7qDXYTOOUtGYlRa7zJnEZQ2nzJlVou2Ub5UScpr5SNMnCE42UyguKZURpTEqAKa+UaI5OUOT0lSuhyHCBHDO9RTJ3HzFRByuR1KGsi9FJ8IOjm9Oy3ZWdUF6SX4VLRHfQCX20nTO49H/JXHsQszg995R35Vr8cgHQpvZYPBjvqt/pVfRY9vQY/QcIVF6HD3RIj9NBozYvH8ySVs7Gy5Hjgf8vcfcLrjkey5Tjb/AKZIg4yKE3om+4TcLkjWKkeyjprv2Fp9k/Djra3P/SmuujrwOeP5C3YB5W9rLFqhzSRfK24th8JIo42siN9KG0ImwTSkD5T7KDTi4SJwQotwEGjMbD3V7S22jJO6zZnXfZa9C3khCrCe0Z9LbSptzhQGMqXS63YiNNjZWDkgKm0+cK3uUEsw4V1hwuXm4m0ejqvy1VXwxT3tyudm66SB7Xxtcx3M0i4I6oEsvSnqg5uUFVIvIrtdZzlmykgmyvG/Scpr2u8xe3AVCqpyd1fpT9Id09SW+GbpxN69syJjWlXBthUmvHObK5EbhLKDC+vS5TDm3V5kYtsqtNYK6HgNUNYDJG2xVYRi6NPO0D3QGyhx3TlKxZjaGjBUufpuhtItZTYLhLYkJoPNdXYzhBY3COwABJYUtzsqr43H5V4i6G/CZKgjKfw8oheLojbEIlTrYPJyqJeNkaRuCqkosE4V9JeILrI4qmtpzW9yrpdlYXFshFJEO6jnusK0+P8A6zjkz1UAb2SJxhMCvHe0cnKdzRbobhQJuQB1S5/qEdBhJUjiuKNEZTziRotTTHzWHpd3XL6749NKyCos8BoLHdS1esarTNrdMqIiPNy3B9wvF+K68yajT8pPkaGO+V0cH+rphz2Y47V3t5yXNyUJjQG4F2ncdVB03IS4c1vdGjmjkyCObsV1ascW9gSscyzj6Ts7t8qrNAHjmjw7e3dajGt8wLbg+pp2PwqEkToHczLmIn/8U8anLFBkjQCJAeR2CP4Sq9SPCcC7zN6+47q74d2ku9B6oDo+Vphm9Byx/b2Vys7PQTQAAW5YevZHp/LL/bfuqAbJTyEbs6hXYi1zWuacD/RVlCwvt3WiPDqVpA2yun0pwDyL3zdcLoFWYZGtcfK7C6SiqHxVnL07Lz88fb1eLLcdqwgAIzSqFPNzAXVoOuRZQ0WL9ErKAdsphyRI8vmS5cpycp2myR7LlUSLFTymcMJBHGcpgcpuXPsnFkAx91Ei6kclMThMBPAG6s8Og/8AF3HtGVXcLjIV3hwA19Q7swBXxTecZ811x10cx8n+FyvHbgY6Jn8xK6qb0i3suP40JfW0zBs1l12c11g4fjTfJGEJc/2Uw/zWVGocWTsB2cE8EnNO5t/SuHT1mtGcKd7hAidcI4OLJRFRUHIlkzmq0tbhF3LqPKOoK6+T2XH8Kj/nEIOOY2Xo501hccru+PN4vM+XdZsQpXW0dNj3ukzTYycro8a5fJi3yluuhGmw+yTdPgBOyPEvJz4Cm0Hst9tDDe9gpNpYm/pT0NsNoIRWg2wCtgQRk7BFZTM6AIDGaD2Km246LWdTtUo6Zl7kIHtmNv2R2Gy0TSsIwLIT6YC/KjY1QS66mxyrv8pspxnCZL1/pqsTlFBvEqzyb4QdFByovOFAJPKCXaM/T90Vx7KtSO8iLzJVUvoRpwmcotKRKR7ReUK9nKbygF2U4mrAcpAoDXFTBRoxScboLj3UicIL3G6JAfmt1US/O6g5yGXb3TTsdr+ZJ+yBCfMjOOEqcriHG7lH2SJ8x73TXXG6wa8c1NJ8LJ0N30re616rML/hYeiuI5h/MUmmPSPGYvodRbsuZ4JdeWP+ldTxXnRKgfylcdwQ760feyop29OgPkBVeiNpZR/MiQHyDKr07j+amHupGmgTYLleNP8Apstl0znYuuY4vPNp03wnSk9MPSTehb8J9Cdy69ILbtQtGJNC3tZNpBI4h+WpqrsJjeWK/dbkXRYcgvJF8rciOySaM09FN2AoDfCaZwa1NJwPKT0SuAwkmwslH9tcXrFbU65q79KoJDFSQfvErdyf4QnJsrdNv/jWnNq/CdVx817brraOSOWEOie17O7SuV0HQdNgs0UrHgDLnC5KsV+nzaSTX6MXcrcy017hzetuxWmEn0y5MrO3VJ7qjpeowalRR1NO67HDI6g9ird7K0HYeaUBXWHK5PinVZdK0uoqKe3iMbcXXhNb+IvE1TUuadQ8Jl9mNsrmO4jLkkunT/iHpNY/jeZ1PT+Jzua4Fe96FM1mj0bZHtDxG0Ec22F8faxr+rTyieXUJ3S7c18odFrmqSWDtTrLf+6U7j72zwy8ZqR9mVfM5pe0gtHYrNvzOuvO/wAJtRnmpHRTVMspI/W4ld54ha8ok01mXlJtpQlzBhDqHOkaRshsnFgEUODkY7LkksUWxEPV+DATBovdTFuieXtOE0v05wrJ9KpUxwrYPlWdb4qFYLlAhcGotcbBUWSdynJssrppMerMDsBZjJMYV6ldcA3RYnbTj9KICq7DgIodkJKO423QJneU3RiUCcYQFIvPOFbhddu6oSEiQWVynFhdATmfZpus6qqA1XKknNljVDHOcSbpxOXv0IyUOCxuLjelhytKNvKeqzOKx+xxEd1l8n/6dbfGx1nHLHZMEhlOcLyXswNxsDbdVxLZxBRZXW2WLVVTaeuhD9pDy390vbWRvwvApZnl3lDTdeDamxlRqlVIS6wkPKAvZdSqPA4cqZCdwQvFmv8AJLMP1PNl1fH9bri+Xd2QTxY2XZyktt5i4rNqmuuJaZ1wO3RHrLR0+fW7e5UtPog6MBr7F3+q65fGbcF/1dK1Nqp8QMnbnuFdfOHssHBzStJujB1hJGw/7o0+nQ0rCWxcrLZJCzvJhb6aY8eevbGD7w+G03HZAdi7XG3ypSmATAtEjfcKxJDFUAmMl0jRc46K96TZtnSOxa4xsghw5rtcGm2QoyuLZi0i6lVBrSx7QRcLSMq2aCVz6XnFuaNwt8LooK/mdC92DsSuToHujpnm9ub/AAr9LVsA5C/zDPyufPHddfFyakeqUMwcxpv0WiyUXC5TSq0up4+xH+FtQT3AzlcnTtl21w+6Kx1ws5k1yFZjkF0rAutKe4/uhMcLKY3UiJgpdUksFBkdtlEhSJBCY5SJA+yipkW6KDj2TAciu8MH/mFQ3uxZs0h2Fz0wr3D0FVDqrZJYHNhewgu7LTh/eWM+fX47K6hwuyy4/iUeJq39MYC7Ei97dlx+pfU1Oc9sLp+R+jl+JN57c1q0B8OOUbsddY+iz+PWVcgN289h/ZdPrY5NLqXNGWsJC4/hJtqFjju4lx+VzT9a9Df+pHWwlWGqrCcBW2C+VMOpWSspWThWhd0A8urU5/nC9XG5Xk+k+XUYD/OF6yz5Xd8W/wCa8z5s/wBxF3pTxXBKdwwmAK6nFonuI2QIyeY3KMQTdDayxKCsEBIxdQdIBlTAshyR3GyW1a1A/GPNurUM4AVIw5up8tgmndi86RTjkHXCzwXbKxGMZU2Kxu10ytAwQomQEFUZtrjCECRaxKJDtp6g3ebKLdwneDfKZoThLbTaJAdkorT9NBJ8yAkFF5U+iC8nKAtUx8uMIwKr0nosUcZwiiJgpnFRSJSUi84Qeuym8hDHqTTRB7qY9lHoLJZvug0icITnKR+UNxSFDccqB3UjuokYVEUB8xVhyBB6kd2ymjFwrj5j8qIdY7qLzk/KEX5XG7RZjeM/CwNLPLPID/Ettxu1YlF5a+YfzJLxH4kHNpFR/QVwfBUh/NMHuV3+tjm0uo/oK844OdataL/qKqdJ/wCUesU5PIq0RtXSjui0rvIEC9tRd2LVJrxOFzvFQvp02Oi6C/usDifNBN8FM45rRDeiASoDy8Rs92qGg4pLJqby8Qwn2TH8ds4/Vjx1W1Eb2WIMyR/K1WPAIukmrrShVLgGKBmABJVOrqhyo2Wl6STlpXuG4aT/AKLi+AiH6dWTHMklQ7mP911DZQ6F2bgtK4v8PnkM1SEZaypdyq5+tTfWU/8A5ekaWLRk91px+k3ys+jHJA0dwrsZuFpj6jLLtzFZHLw1qb6ymY5+l1BvPG3PhO/iA7Lo4K2CpgbJTyskY4XBBR3Br2FrgHNIsQdlhTcOUTXufTmSn5slrHWCvtlJceunG/i/xCdO038vEGPdMLHOQvDoZPFdznF8r2z8S+GtPdw7NUOD3Txel5NyvEYGhjuUbBazphd+d2tajSysoW1L4yIXmzX91GHTKun0uDUHx/ssziGuGVrU3NVaLVwyuLo4hzMadmlXeBwa7hjVKSUl7YgXsadm/CVvpUnt1/4T6kaet8F+Dycw9wvYHvLzzt9LhcL5y4GrTBr9EHOs03jX0RpzvFoYzuRgqujx9iMc4HKsMndjdD5TfKILBG1WehWTkutdGZKbquxgJBsrAjslbCxxrRpTjdXT6Vn0pICuX8qyrfFTrG82FSZAVemPnUQRcJxOXav4Tm7K7SA2F0xs5GixZGxpbZ6QjMN0JvpCKwZSNO2EKUXBRsIUlsoNQe36isQ+myE+3OjR7bpEHMOZVZIeq0CECezWFMKYhFtlicXx2oY/lbH5kB9rrI4rcJNMaezllzT/ABWvDZ5xxjNipHI+VCPqpG+V5b2FebAIK5biljpKEmM2kYedp911NSTbGVl1sIMd5mB1s8nf5Ub1dtZ0w9Z1CSTgEc7eWrmHLyn/AHXAuiZTU0TAOd7Bm+wPddnXw1WqTtiaxzYg4G4Fmj//ABc5rcVPBNL+ZmtE3aOPJcunjy+o4eaW3bnW0/5iodLO4uYMq3HUgTctOzksMHclAq6prGNbCzkvs3rZb/BemCeo8eUXIyB3XVb63XJr36b3BejSSzxyVLHlxz5sgLp/xCih0rh08kLXzyHlbjuun0CiEMIcWgvfk42WLx5G+onooZGuMcfNO8jsOijX3T8veo890zhptTNSNkt4nLzvJ2+ESr0CbS6mWqMV4+U2aF23DEBNN+cmjIMrvJfo3oteemFVHHE8A3Nrdgo8r0vxm3nNJwHDrNFFUxymmccvuLi3dc3xjw2NHIEM4qISfI79Q+V7TBp76E8sFhCcOadlR1HhxmqPkpyYoYZGkuIblaY51FxxfPs1T4NNyfqVeFwPm5nNduF6NxpwPQaXw9PPD4stZE4Wlvg3O1lwUdBJFMBVRPiJAI5xbmC3lmtsL5eTqeG9XL2NjktzDC7KmqdgMry8wmjmZPTOJA3au402qMkDHE+oXXJy4zuO/hzutV00VTlW4p8rAjmyFehl2WFdEu3QQS36q2x11iwzBtuY4K1qY3CiqWwMJyAPlOwOdhjS4+ystopXuF7N7qphcukZZ4491TINwB1TuilYCSwrSigbSuIe68hF+YjFlDxeaZo5uVpznqFp+HXbK83v/PTPEM0npjcgzQzR+uNwPRbENSSSyFjpepsNlrUkDo4w6oIdJuBb0q5wTKds8vkXHuMXRNJdionaWv6A9At7k8JlgLAnopk+a/VRfJykttcldOGEwmo5M87nd0N3lYXE4AXGyHnmkf8AxOJXZvu5hYc3FvhcfVR+BNJGd2lY/J+nV8PW6wuKpxBolW848lv8rmuH28lJE0dGq5+IVYGadFB+qaQCw7Kpo/liasJ+ru/5OjgOArkeypU2wVyNTDow2SbkqJ6KbCqQt6fith/qC9bjbdrT7BeR0OKuI/zBevwfbZf+ELs+N1Xn/M/aGLe6XLYKT8KJ2XQ5NGIzhNy2Cfqn3CY0HZPhIqF87IiaJyghQc0JFxsgvkte6pIgaAigWCpsm5jZWozcBKqxM8XQywghW2tBKd0aUOqcjbhRaEeUWQw3KNlU9o1XJ8ysu+2qzsKkpXQ3qQwoPQFilPkyj3Vam9KONzZFOJXTFSGyh8pGg47qMeXqT7JovXZNIpGUx7ohCha6nakHIZRXBDIymAwLkpEYU2jKchGyChHnKO7ZDiHnRn7JU483kfki/VD5rlcdUfiHoDHOH5u+egVCX8T9DYfK+R3wFyzDL+Oq8mH9eig+XCxI/LqkvyuNk/FrSmCzIZnf2WNP+KdP+adNFRv5XbXKr8WV+inNhPt6zqfm0+Yd2leY8Knl1IjtIQqNZ+LrpInRx0Nri1yVydJxnU0tS6WGBty7msrnFki8+G5dvo6lceUd0KU/8wB/lXh4/FHWyLRQMH/aUCX8QOJKiZr2xkOAxZhS/DkP/J430CHYWLxAeailGNivGDxZxjUehswB7RqpV1/F1RG7xhU8h38qPw3+l/5OP8ej6FI1tMQXDfuomWNmuU7jI0Zybrymng4gmv4Pj29ipjRtflnYx4l53bXcq/FP6P8AyN9YvoEV9M17CaiMW/mCPJrVAzLqyEf9wXh0fA3Es1uZ7hfu8q5H+GeuSH6lSBfu4pfjx/8AyF5s71g9WquKNMYDeti//JZM3GGk381YzfuuJj/Civefq1jQFOo/CuSBgMlaCj8fH/R+Xl+sW3qH4mUdOZIaaN0uLB42XN8M8dyaSZgKUStlkMjjfKt0f4aQv9dWT8LkeJdHdoOryUjXnlA5mu7haY44X1GOefLNZZentmg/ijo9cxranmpZNrO2XeabqtFWxB9LVRSNPZwXyRGMFT02uqaCqL4ZpIyNg1xAVfj/AIj81/5R9ifmImuaxz2hztgTumneA0r5nh1mtq6yjnrNQmtG8HmDvSF7c3jXQDTxtOpQk8ouScqbNNJltX/Eh1uC61x7gL53jN5SV7B+KnGGmy8LNpNPqY53zOyGm9l4zRvDn8y1n6ufK75K6TRnAw1cZt5mFXPwydy19fTHAkjKxqSbwHuJNg5tkfhSvi0/WfGmJ8Mgg2U37aY9xGneaPVWO28Ko/8AK+k+E5vGpHtBuCA8L5zkZFWahM5ji2N7+ZpXvn4dvY/T4uZ/1GsDD7qr0nD1k6t4sna3PyivZcYSiIBs5JVyTjitlELrWBUuYAKnNJZ+CosV5ajSgKt9Fl0smBdXmv5ha6S8aFL6iosuUUt3UmNA6JW6NAAkqzCoEBEjICWzXGekIrQgMde3ZGYVQSchSnCI75QpSkFGQ/UVmH0hVpMSBWYcNTIQqrWfbKtFBnZzMKIK5ORzhUuFyoaxd2lPv0K1ZaQeKTZVdbh5dLk6J83vjqeGa5I4aP1IpwhNxIQUU7E9F4r3wZixwvhpCqyTm3JFGy+7nv7KdRY4Jsq1LEamqbCB9MeZxU2NJrTl+LdWfDTyReK67iGtaBYG687maZqyQzX5I8rruLpY6jWKqaUiOlprj3eRtZcPUVXNROdYtMlyPhdfBjqennc+W77Dp4xV1ZkcSGtz8r0zgWneXxuYA2NpuXO6rzrRoeamZzbPdle4cB6XSO09rhzOtm5OFtnd3Tnnqbdjp7XOgDozzA4WDxCBWcQUtGyQNj8MiVw7dvldBzEN8GiwbWdJ0HwqGtUDaeGknhZ54pPN7g90r0MfVPSRtYxkDQLRizWnqECGJ7aqR/K4N2AtsrMLfqg7dRfchXIS489rcwN89lnJvtVulTxCCWuY7lPshPMwd9KIEdnLZaSeUOb0uUOSnuA6M2P8JWnhtEycxPprqmaQ1D2lrxYxlt7dis3X+FqHU9MNJUtLpwOZtQPU09P7LsQ0EuY9tj2KhHSBxdZxaRt1Tm4LdvmyagnoK+WjqHFs0RsWu/UFr0cz2AczS327Lv8AjnhiasrxUsha95HK5w3Nlxh4e1ISObD9QD+yjK7b8dkm1iCrDjvsr0E5LhY7rltSp9Q0uxniLQd3bhVW65PE27Y7HuovFb02x5pO3odRUMFC8ucGuG2eq2eHKh9VQwmxLnYXlVFPXarKIgHhhNy44XrvDkbaXRWGJv1XHw23/wBVH4tXVVeX1uOhoOSCcAOLnEWd2V11Q5sgZ4Vw7YrHho6qZ12jkabZvst6lpuVo53FxO66MJZNRx8mUt3farNFPVMaA4A3s47XVqmpIo4mtID3NOStB0LeTADT7IAYWOz17LTx97Zed1pOHlaTyta23YJ3PBOMqGC82HlHXuiE+WzAFcRQpJBFYvvk2Sbytub3J3JVeRzibNObovKHAF5yjfs0mv5ieUeXuVznE4aKppAsS3JXRG4A5QsbiaLmpGyjdpsfhZ8+NuFbfGy8eSPF+N5/G16kg/TG3mWjpfpasTig34tI7RhbenYAJXLf1j0cfeVdDT7BXYsbqjSnAJV5hURdF3UmqN8JNcAmS5REfmo/6gvXYX3iZ/SF49SOH5iPvzBevU2YY/6Quv43Vef8z9oK7JT9FEkJwRa66XGRSckThQLkAimHuolyTXINJwwqkzb3VonCBIQd904mxVjjIKvxYCA23srDLWwnSxixE7orQbcKpFurjHeVI1KoHmQlZqcnAQbdkgi/0Ks7dW5PQqrhlVE1EXuoyKYuov7phYox5CjWQ6T0Ipwppw6ge3dF/ShuQYTwmgH1FJyUP3E0rLgoEdkQqLtlKgnBQIRCFAhARaN05Ck0XUiMIAMQ8xRX7Joh5ipP2QI+VP8A+IovEcZK92SdgjM/CjTm+uqlcqQ/EXWI5HCWljdk9Fo0v4g1breLppI7tKi/kVJw/wD+2u0v4WaJa8jpnf3U5Pw60KKsjZ4Ly22xKs0n4g0trTUUzT7BPU8caRJVxvc58dhnmCi3Npjjxf8AS+3gTh+KB3LQtJtuV5/p2jae3XZYnUzSxslgCvTKXizRqqmf4dbHgZBOV5xDqFI3iCabxmCIyXBJRLkPHCWa09ModC0xjRy0MG38IVio02jiqIeSliHw0LOp+KdGiaOevhGP4kHUONtBY+J35+M23sVOsmluMv06WOniAxEwfDVR1iJjaSTyt27LBf8AiRw/H/8A2ua3YLH1f8TdFkheyIveSOyfhlfovyYT7S0H/wBUY9RRaq41WlP8y4ek46pqV8hEL3BxuhVPHzZKmOVlMfIbhV+LL+F+fDXb22MXLLIrnHovHT+K1QLeHRhBm/FHVJPt0rBdH4c035HH/Xsj5iFnajK6RthleQTcf69P6IbfDSq7+I+Jp/THLY9mFOcGSb8rje06bEfDJd0XA/jDp45aPUGAX9DrLl26hxdI08n5kD2amdpnFOrtEcsVRKzfldstMOPxu9seTmmeOpKwYtsK/QaRVavKYaKB80gFzyjYK7QcK6xVanHRfk5Y3lwDnOGGjuvobhDhmj4c09kNO0OmcLySEZcVpctMccfN5n+HH4dyzOln12N7YGmzInbn3K7Sp/DbhtxxSkH2K7nYdFXPnnaPdR5Vr+PHWq8Y/Fv8PaPR9Kp6/R4nMYMSi/8AqvLqJrmOs6119SfirF4nBNY3q1oK+Xg8RyHmWsu8XP4zHOz6XXk8tkGEjxcJeM1xxcqUET3yeUJLnbXpyA5hG69k/DebyMF15foOiyVsjA+RrAvePw/4eoaNjA+Uvcet0ash73k6cEWQJXWKv1tC6nlIBuw7FUpISVO1+FVzObWuoAucUQUbua6L4Bb0StKYX7ShJBC0ITsqMbC05Vljio20kWrpB1lBm3upD3UtNaifNdO1yiAE4FkQLUTrAXVlp6KrEPKjs3VpH3QpNipgqEpwUGoSH6gVmE4VV/3FZh2wghimNrZScUCeSzSgAyFvMdrrM4hI/wCEyJpqk+NZD1t3PpD0+X9Kniu+SOCJ+oiggCx2Qd3lSccZC8W+3vq9Q27jy+b2CydX1U6VE6no2tfqE45WNHT3K0apjDc3eHnq07LJjoYIXvlY0ul6yPNyp1d+163NPO+MqaenEbZS57pY/Oe56rlalkj5YIy2zQ0D4C9N43hMmmRyDDmusPYLg9QDYKhrbtfKW4xge67fj57mnn/J4/HJo6LQ+NFHGTytkeIx0JHsvfOHdNZRabFDH5WAAe5Xi3Aga/VqN05dKWuuXu2HwF7/AELQGB3S2PZOe8tMc5rGVZhibG3At7KNVE2eB8T9nCxRmm43wkRjZb6YMWz4x4Ug8zdj3VhvoAaMuOVYnhEhs4ZHVC8J0brg3asvGytPKUZhLTYZRBZ8o7Dohxdbbna3VPE0tzs69zdaRFGkhZNIWuHmH6h0We5ro53MvYg5WnEQDykea17IFdAZC2RpHNsQizYlU5WDlNzzE9ey56u0P8yeamnfBKLkW2JXQNY5vMdx1snje0k2aMdVOtqls6cNPwnUz0vJUV7HyHDg9vkI/wD2rGicCaFpkjZaguqpQeZrXelv9l2RjbKy4G26UcIcLAAHunJoXK1lR6NpTa01cVMBKcFoFmn3srkdKwTc7mWH6cWA+FfEP1DyiwO6jUzMHlYOe2CnovKpxOYyI3+B7osMjOgOVXha6Ut528rRsFa8rMN/yqiUnyFwIHluhhwAtc/JTSFrXi9zdRy69tvdAEP28n4Qg5zttv8AZSDBi9zZSLbC5IA6pkiGhuwTuNiALXUHSEghuB3TtH905BTEnvYKvXN/NUM0YI5i0qzgjKhezxZth1RZv0JdXb521vmdxhNfdrQFvUWzV0HFHBToqGq11uZfzNiB/Aseli5WjC4uTHx1K9Xhzme7P61aU4F1fZsFQpxsrrMLONaMThM0ZUbqTQgLVGB47CO69jo23pYD05AvF4biVpHQr2rSHB+mUp6mMLp+P1XF8ruGkbYlRGArUjRykqhLIGkrrcFopyVEt7IccgdhWARZPRbBIwmATyvsEJsgQNrHLdqpzkturIeOVV5iCkdAikuVegOFQaPOr0CdTFtvRE5iFAHFlHqEaFElyEKyPILgIdkjQl9CpkZV6YeRVLZThVEDKjIEYtQ5d9kAej9BRih0Y+nY7IpHZBzo9vKhkYRv0oZSALt8JU4vJlSelT/cTJZcFB2EUhQcMJKCcFEjKKQoOCAiBlORhOwZUy3dBAxjzKcmxSjFnFPKMIEfBFVqeo1Mz/pnc+liULtZOI4am3s0r6TGl0MbjyUkIz0YEYUsLR5Yox8NUfn/AOlf+PfuvnOGh4imH06SqPwEV3DevyOb41DPc/xL6Sp4gPS1o+Aq2rggwkd0Xmv1B/40vdeC03AHEEjedtKW9clZtTw9qJqnUkjeWYGxyvpiAEw/2Xkmvjw+L5L9SE5zWlfj4z7YVF+FWqTtaZKmNoIutF34P1ETGulrm2JzYL1rSvNTxHfAV+vZenaR0Kj82TT/AMfCPKKf8HKewMtc4/ARKr8JtNpoi/8AMykgL1eIGwVXV2/srrdkry5/05wYfx4jpvBemy1EjJXvPK6yt1PCGl088DWxuILwDcrZ011tTqB/MjasbSwEfxhH5Mv6qcWGumtRcGaG0NtRMPytiDhjSGGzKCH/APFWqDzMjPsFqwtuVPlf6q8eM6ilDolAwDlo4R/2qwdPp2N8sEQ/7VosZjChK3CW6UZU8TGQOsxo/slo4vIbAKWoG0JCWiet3widqvTUYxvjg8rebvbK0bbWWfGbzK+Dj2W0c+RPwL2QqMc9SD2TzOAacrJ1rV49F0qaqeRzgeUdyrk2i2Se3I/jRxSI2f8ACqV4uReW3+y8IefEmJP+i1uJNRlrq6aeZxdJI65WTC3K16jl7u6sMFgFoUI8wVJvwrtJg5TgtdloUnI5q9R4Y1AtDcm4XkelTcvLldtotZyubYrbW4zxuq920uqirqURSm5tgoctKY5Sx4+CuQ0DUi0tyu8pZ2VsADiOcDBXNnjp2cee1QQttgBN+XHsjlrmPLXYIUj7rKuiKjoMbKIgsroynDQUDxis2LGE4iVsMAT8oQVim5lgoMHm9lbkZdB5Q0o0nQkR7ozVXY622yM03Kohh/qoS5CmFGTIKAzpMSZVmA4VeUecd0eFBDOVacXYbqwb3UJW+QpwVgyRfVuh61/0l4V+Vo5iqGtD/lzgeqfNf/jqOGf/ACRwdvMVM+lQkxI6ye/lXivoPpWqNlQlbzG3RX5sXVeKMySAWS01xY3FVA92gPlY03B3Xmc9NzV0ErjaAtAe4/qPZfQVZpLqvhusiYLSeGXN/svCtT5pomRiPw/yr727DqStuLeLi+RrJpPpKmlgbVUjXMjYRyWGLBepcLcUN1CkgicA2flHNc4VT8Maim1XQJYpmskIdYtcL2C0ZOC6eKqdUac4Qkm5Y7Lf7dltMbrc7cuWeO/HLp1UUgcwEm6MXbLN06ikp42iU3cOxuFphoFsLbHevbDLW/SLh5iQoWv8Ix3Kh1sqIBos7HRTY/8AiyO6RFwUNl+YpAeORjHFxuXFNUSh0D3MvdQFrJ22c1wvugAUd+UE/wBwoywESvMVs/pHRWBCWwczcEG/yhxyc55ibDcpGjAbCxweyQkLXODWgnopSkEtdsb2ujNaGglrbE9Uwq2kffxnWHYItPE1rPI0X7lQksHttkko0TXOkPLhpQRXDTe97J3NLmgmwUntAPK0YCU72MHmP9gnoIj9IaLnumLTcgmwHVCMznC7BYJjzFvmJKcgEklu3ljO36u6FbAuSpWs0KXQJkVrWCkNykRcpdSmRDKFKXC3L3Rhshyjy26nCKIvflWV/C9VTEZe13+V5FNAYnFpFiML3HR4rac1ttyV5TxDSeBqNQzltZ5XP8rHrJ3fBvvLFixYtZWmuwqtrOsNkVh91yu6rIKIChMOFMbIIWMnxB2Xr2gVAOl0gvchi8fabOGV6hw+7/ltMf5V1fG+3F8zqOilkBYVkTlxdYK7zczcKIg5jey7HnVUhvzK4XYCcQcvRQlFgmSrUy5wq7ZCnmN3KACNHoUSuGEjKTa6i3ZP1QabMm6twlVWbBWIt1NNeabhPa5CGwi3siNcOYJxNHfgBDG6K8AgJmhSoGYeVVQLlXKgeVVeqIVPZBkGVYAwgyjPdMlmjH0kYhDowfCyjHOUjnRiLNQnI7shCcMlBgu2Sp/uqTgEqcfVsmlbIyoObgorh3UCElBkdFAhEIzhRIQEWjKmRhM0ZUyMIATAb5SlHlKkzdKb0lAjygjzH5S5UQjzb9U4GVyOoWFtuipay36TD2ctGNosqmsN/Zr9imUTpB9DHZeS8Yt5OLL7A2XrNEbwD4Xlf4gs5OJIXdwqxLN6HodzRwH+ULWrB+xlY/Dx5tPpz/KFtzi9K/4UrvaNPmME9lW1X91fbsrFKfpNx0Q9UH7M74QX28spPLrNQM7o+rgXh/rCrx+XXZ+10fWssjP8wTP6d3peY49vSFswNWJopvDEd/KFvwjIwkWSzGMKE7cI0YUZhdpVJc9qZs0hF0TZ9kHVSQ4BH0W/hvKWPasul+A3mK0GFZtOfM4jurrSAwlbRz0CsmDGkuNgOq8b/EbiJ1dVGnjd9CLHyV2fHuuChpHRMd9R4svENSqTJISTcnN1rhGHJfpnTSGSU/KPC3GUJjQc9VdYQ2IYytGMIDF+isU9uYdEFouMI0Az7pwq3dPda2y6nTZC2xBXJ0FrZ3C6GhlDbbraMneaLWFpFyvQNE1AjlyvJdNqPMAux0msc3lF1OeO2uGT1Rrm1cVwfOAqxBabOGQsrR64+UEroHhtQwOb6uq5csdOzDPapfOVNhCbk/yly2UNhr5SIugg2KK1wsgHIxuq0lro5cgvydkJDvZFjJvlDLVNtx8KkLITSHCZpTS+lAUpT50eBVpPWjwmyCWHbIcrgGKRKqVT7NKcFVpHguNlQ1o/sDh3Uy+8ir6y79g26pcv6UuH944ebEpUC5Kc3kchXxleO9+dITXOyu6XTl0gKqMsTkLf0aK5aie6q3UdRpUADGhwu0ixXg/4n6HLofFU7ImfstR529rFfQlGWQU5kk9LRdclxNoo4iY98oHjNBLL7W7Lsxx3HmZ56yeGcFayeH9R8Rj7sc7lkj7juvddL1yg1CJr4J23cPSTYheJ8ScE11HKXu5xHzYEbbgK/wAL8Nao6SO9TK2H2T349I1Mu3t0cjHekghFO4WVo1EaSEMc8vNtz1Wotcbde2Nkl9ET5kM+pO45HuoONnJka+/ZQG6Zxs63RR5vMkEwcKIdh3soCSxcDshh9yexFkHpYbJdpbfCruNuUDAQGS3LmlFa67PMdktnoSqeY42n3CPzOfHzbCyrzeemId0yitaRTM5ja/UonZJQAcpkOTsEUyCCPmd6jsFWkrYmWjhHO5vXoEJgc8ufM7mef9FQ1/R2zvfnAQ7cxLn5JUmts1IYbnumSTbWPRL9O6RPlumwGpg/RSvgJjtuntkJxJzdSHW4TWu5SaN0yJQkwwlEICFN6bBFOdul0SQO0qIjfIK4njuk5NSdI0eWQArp9EeW6cB/MVQ4riM1Ix/VuFnz4749uj4ufjySPLpmFrzhRj91dr2crj3WeDZy896uUW2IoQIyjtKaSHrC9P4dPNpFMfZeYO3wvS+FjfRqe/ZdPxu64vm9RuQmxzlaEIBaO6zG3Dlo07hYZXZXnS+xXNHZUqlmNlfc4KrUOCIqsSZtneyiFZqRfIVQmytGxsW7JDdDYbjYoobdIbTjvdHZg4QmDsitSpyjA4Th5uFEZCa/mFkQq1G+aMFIBSYPpA90w3UrCqPSqllcny1VXDKCpwMIUo/sihQkQFqiH0rIpCHR/bRiO6Dhnjy7WQnC6O8YCEQgAuCVPiX2TuG6UP3QglxwuoEYRCMZUSgwiMqJ2RXBQQEQMqRHdMMm6mbWQAm+opS+kqTBlNMPKUCPLCPMbd1Nvwm6nHVSb8rkjqo0QuAgaq29K+6sRYQ9QaDTP+FSVfTs0w+F5h+JjeXWKZ/+q9N0w3hsvOfxVaBU0z/dGPY5OnZ8Lm+mU5/lXQPAMDx7LmuD3c+kU5HZdQ0AxEeySslajH0goaiP2d3wp0foI6AqOo/Yd8I+h9vKZfLxBL7o2tYhabbEINb5eIne6Nrd/wAsPkJn9V3OgZpo7fwhdFDlc1w1mkiP8oXTQlIslqPZNKPKpR7JpBgq0Od1QXlFla0thEDvdD1BvNNZaGmRWgHuljPZ5X/IUAsXD3U6+pZS0ckjzYNF1ZdCWutZee/ilrD6aBtFFcF4u4+y2k9sMspJt55xdq7tS1GSS55ASGhcpMb3Vudxc7fPshNp5ZD5Y3u+GkrbGOXLKfdAiarLRcCwsrtPpFdKB4dFUO+IytKn4X1qYjk0ypPy2yrSPyY/1jNaixbrq6X8PeJai3JQcl/4zZdDpv4M8R1ZHiy00APvdOahXLfX/wDTh6ZwaBdatNUtZa7hZdo/8Ea+KRrajVwAd+Vq1KD8F9OYf2vUamU9hgJ/lkE4s8vclcVTatTROHNK0f3W7RcUUEZHNOCfbK7ej/Czhqntz075T/O5dBp/BvD1GR4OmQXHUtuleaNMfj5uQ0viynPKImzP+GFdppWvTyNHJSTW9xZblNQ0cAAhpoWAdmhWeVo2AH9lllntvhw5TuhU075m88kfI49Edw6qFlNp6LOt5NI2S5VOwTgYSMLlKRb1RHf5SGcJgMNuU/LhEAsnIunKiwNuL3SlI5VOyHNYNTQz5CfECsRdEGQecEI0fugDnbCqVLbtKsPdYKvNKC2yqQqy3Ms8myp63igWqW3OAsriLy0GVnzX/FVw4/7jg5n3eflBLkpHAuKHcXXkbfQSelumuXjC6vRY7cq5igF3hdfpLTZuFWHaOX1i3KlodBG0ny3z7oDw2OJ/L6rKeoPtFG0b7qjK8mIg7r0MOnj8nvIF8bHizmgjsUNlNFF6GBvwpNfY53U7je+E0kAAnPZN0so3xdME4m3whvOxTvNuqG44N+iR6Qe7zXuhPfbKd+2EJ9yFNp6RmfYgjqEKmlu90Z33CaoBdTkjduQqYeWubKDgbqbfapPQ1Q7klPsjQytLRZVK5/NMS30uAKrxyESWvjsjZzFrSz8sDrZICqSzve1rpHlxAsB0ChUzsbTPyNlVNTGIG3cMC6PIeLQhkbTs5n/cP+iuUTi6EyO6lczHUOq6gk7E2AW8JhG1kIx3VTIso0Q7H9kzX3aFWll5YD74Shkv/ZXKjS444SPQITXgn4Umuu72VJ0ISLgJxlyhfJKk3/VVCEGblTGAAht7KQJJKCS6IU2G+6m93KLmyG0GVtjuTsgR0ej04ZpsRt6vMh67AH6bJjbKvxHwaeKOx8rQFXrj4lNIzlwQjP3jYfHdZyvJdWjs9yw3mzl0/EEXhyOXKTus5eTO30GtzazE+6tMKzYX3KuxlUyqxuV6bwg2+hxdbErzAHK9Q4H8+iNHVriur41/1XD82f5jYv7IrJeUJnxEOQXtLV215mM9iSVVhugmfn6qtLm6eEWIuiKtHeLhV5Gdlea0Ed0xiDjsqRVFjUUKwIeikIgEj0HG1Fa3Kk1oUwAAptVIg4WCh1CM7ZBJAcPlEOtdv2h0TBOz7LbpNFykYcw8qrH5VufAVR3wgH6KEikmfnZBLdGPpotroVIPpo3bog50ZwwEJ3wjuGEFwQAnBKH7qdyaHEowgl07W6qJyLKSYpKDIyoHJRHKDhlMkRuFN39lADKI7ayAGz1JTegp2epNN6CgR5YT5j8qTd/dQt5jY9VIC25XK6qsxdE1WLwPx0Si3CJMLxO+E0szSz5CAvP/AMWWnlgd2cu+002Lx7rh/wAWW/scbunMjHs+Tpu8DvDtFgXXxnyH4XD/AIeP5tDi9iu3hy2wR9nfpXozl491DU/sH4UqcWlkB7qOon9nd8JfQ+3lOp44hHeyNrF/yhwgax/8wNKsasf2M27Jn9V2fCp5qCI/yhdPAFy/CJ/5ZF7hdRAcILJcjupPGFGPp1U3+gqmbCrPvYWvpzfpNFllTDmn/ut2kaGhgRh2M+k5mfUTTaTQVrA6qpY5XWtdwujzj6iPB6FvPVYWbntiDhbRWOuNOgv/AErWp9F02JgMdDA3/sCslqPFlgT3UTDH+K5ghjI5Io2j2aFNptsApzCyG3KF6GZe4ytvTxYj4WLGMhbtA21vhKidqWsi0rSqDHrQ1vDmrLYMoaY1b3RI91BrcIrGpLFjJ6owyFXCKxyQ0cttlLsiBQcbIBg7up3QrKQujRbPeyV1E90wJukYw2TKF+qbmATAh2QZTiykXWQZThPabASfNlEaRZVycqYeiIp6hxssyeYtcr8zgWrLrNjnK2ws+2VXad/MBdZPFrwyjNuytUUhtYrD46qvDpmsvuFzfKusa6fi/wCs5HEPdkqIkF7LPqq6KIHmeAVmnWIg/wBYIXlar3pp3GlHmcF2mmtsG2C854c1COZ7eVwK9J0oghqfF2z+RPS9qAb9Kx84GQs15NzdaFbRvZ9aO7w7dvULNPq8wIPZejOnjZdmLQcIZeWHOysbX7lAe0G/Nj5TqYYTNPsUi7qMoDoiDg47InIGR87jZo3U+1ejl1x0QySDYnCoVOosZcRD+5WfJXSPJDnYU3M9NovYCbuFihc8diOcLEExve5KLHMLpeWw2GCI+UuJ7+6d9FSyx8hJA6ELOZOLo7JR3T2Xta/4ZT+GGiR2MZVObQSbmCe57FW2SXRXSiJnM82AT9CWzpzslK5rXQytLXDe6CC0vAETXW7q5XVonkfICA1oyfZeccRcaPgqZYdKa19jYyu2Cj/013r9neNfE03EbWuGRZQZWSeLzvF1wuha/LqI5XuJnaMuGxXSU07sOJwotyldXHhhljuOimrBK1gbe/ZGhqgGk36LHje2RtwbJvO6zGu8xcM+yuZ1lnw6np0sEtqdrju7KsMf5b9SufNW5s8kdiWsZce6ek1N8gBYx7sbWtZazNz3F0bXC6K3/VYUmpGIjnYQTseiJHW1EuIWWb1cVfkjxbbnhvXJ6JjOyNly6/dZDJJXnlyB1ceqscjBymR9z0HRPyT4rLC+aTndhq0tOYx8jXONmgrJ8UvIa23h9+q1NPBe5scIu9ynfvStettyjnbJI6Njnv782zVYlj+m74SpoBTRBoF3HLijuN43/C0+mXdeXcUR+eT2XBVR+oV6LxUABK6+y8p1Ovayci43Xk/8tPo8P/pytCB2VoRPwuepKxrzgrXgkvayvTLtpsOQvTvw+ffS3js9eWRG9l6V+Hj/ANknb2IK3+P+zj+ZP8OzfaxKqSZBRHv8ykxnNuu3bzGbI03KZgIK0XwDKC6O2wT2mmjPlRW5Q24RGZ6qok+xQ3SAYU5BbqqsoJOEqe1iN10VqrU4IKtAKavGhv2NlXJPMLqw9ucoDh5h8oKtqHMDVIJocQNTt3uhUQm9KqP3V2fDQqj0CogJPGyQvhO/ZBLdJ9tEO6hS/aRLZQZnDuhO2KM7dDdm6DCKjD91SKaL7oQmrhTFSKY5SUEbqJspuUDhMjAZU3+lRanfsgIsOUpvQbpR7pT+h3wg3lI9RUx2Qgcn5U2m5XJHTVmLb3RX3LCgRlWCPIqiWNR4nkHuuP8AxWZzaWHdiuwj8tXKLdVy34oN5tFcR0SnZ5/qj+Gz76IwdivQKfIBXm/4Xv5tII7Fej03pCd7H1AGYqZEPUfsOv2RvTWO9wg6j9h3wpN5RreNfYVZ1T9zd8Kpr5trsat6jY0TvhUc6rseDj/ymE+y6iDbK5fg0f8AJoPhdRALFH2nJdi6KUnpOVGNPL6TdUhkWvOCe63qcbLDA+qPlb1Ps1PjLk6FnHnz2RIbBqjUjzgnsnj2WrJZYLozNrKvEc7qyxMkJdgoAZRJFEX6IAkQu4Bb1EMj4WLB62rbpMOx2Qc7UtbFy1ZTDZy1taHpWQDa1kKi4w3Asig2VdjrDKIHg9UleUHBUrFBa5T5ktDyHa5Mc3QHPt1UfGQW9rLRlEbbqqrXggZTgu3ulsaWrBLkCrCR4UhMeoRsaoxYFAsTCX+yl4gPVPcHtDkKHIw22R+YX6JXFspjah4ZJ2UHtI2WhYE7IcrBZETfbGqZuRZk85c6y066G5yFRdTi+y2x0xy2enfssPinSqrWKtkNMeUDLnnYLeiYA9owrZcI2kN9RXL8jWXp0fGtxu5287dwDSQNJmldPN1J2WVUcOR08lvBYWfC9NkHNe2/VVJ6ISbhcuXHL07+PnyxvtzWjcN0cvK4DwpOhbhdhSafUUDW858SLo8dPlUYKc07rgWstqg1RrD4U1i04IPVGPHj99nyc+V66aIIMLCSsPUJzNNYBoaMD3WtXNb+Xa6nN4jj4WDUt5bF/wDldP8AxcVu8kXuNgFXqn4sCTZRE4dKRbygYKGxxLgZD1U27GtLAsQxv6iLq5HDDU6XPDO13rB52nLSqEszIw4g5Iwrekvc+nrGv3FinL70VnrbGqOHZSSYKljm/wAwsVSfw/Xg48M/3XVE5UXX7o8Mf4XlXJnQq8biMf3U2aLUtPnkjC6OS+EB+Ql4Q/Kstmmhvrm/wEdlPCzYOce5KO83PsodU5jC3U2kXAaAFnaq88hyr4OQVlay7ljflF6PHti0cjXunjeAWuFiCuM4j4LZzeLSE+ETflB/0WrHqPgV7w44tlXNLrn1lUKiWxiN+Vp2sOqydOpe44qB79Me2mpqZwktsBkraii1mopXGGJrH2uGk5K2dNpWy1EtS8Alzibos1UYKizdgs/L27pL4evTlqfX56R/hVjJIpQbODxYBbtFrLZy038p2K1PGp62Pkq4YpWn+JqZmj0DW/s7Awj9J2T3E7v2I2Zz3tnYQSzp3RuaoqJSA7lYOowFBlI5mIxbqmmm8GkeHOIkbsqxv9c/Jx69xpQShsZBDZeXoMqUla18YY24G7u/wue0+cQzWLi0SCxPujxNfFG93iZB7XJWkyYXFuwVw8MG+3RyFVahzSRkubYDYLEfUMhD2Odex6qjDPGycF5cbZ+UXITD27akqbgEZyul0ipZTVEbnAlx2HQrzug1AmQsaw5GLdF2mlMmkjjMpawDqUpkMsNT27tsrKiMPiPlO/skRaN1s4WZBqVNSQcgc09T8qjXcRtDC2MgfC1uck9sMeLK305/ifTpKgPEszYWHbuvHeIOHmipdapcT3C9D4k1V1Q42eSuOqHGR1zlcN1LvF7GNtx1k5FmlVlK7mpqjmt0ctbTdRlDhHVRmN4/wVosjzsi/k2yixCflvtMx8emjRS84C9M/Dsj9paf4QV5hQwmJ4ablemfh4CKuYHrEteD9mHy/eDr5btfdFhlCjUBBjBuu15jQvzN2UHN7hKIkBFc8AZQVV/DudlJsVynMgGQpMlajadHEAIUTTA9FZY9uLFT5gjY8VZsDWpy0AIrvZBcSltUmgpAqr/UFZeTbKqvN3JwWNuHMDU9spoPsNUmoNGf0hVHhW5/SqsgsgVEWCTx/hJtr7p37IJbpftIh3UKYfSRBk5QqGON0NyKfdCff+yAEQmh+4E7v9E0X3AhNXDsFFTNrYUflJQbutlAojtlC2EyM1SfsmG+FJwFkAOPdKceQ/ClHulP6D8IDyT9TvlTZv7IQPmPa6m05wuR1VajsbWVgZaqsWbdCrTctVRNYzvJqLx3XO/iM3n0ST4XRVfl1Ee4WJx60u0SUdLJQ8v1c/8AhXJfT5W9nL06mPlC8p/Cdw/L1Dezl6pSnygBO9ifrEZcVYPcIOofu7vhHqjadhVfUT+zu+EqI8l4g/65H3VyvzRn4VLiE/8AO4vlXa390Nz0VQ59uy4NBGiQLqIei5rhNvJotP7hdHCUiq9FsnlNmn4UYxjKeU2YVSGZe0l/db1IbtYVg25pQPdb9KLAAJ8fZZ9D1XqHwmj9KlVeoJo9lqyTYbOCuRG7VRabFW4DdMJyH/CiFOTZDBukSxB9wfK26P1lYsA87VtUnqPwmcU9bw0FYfP5lta8bRtXOvJvhBfbQD7tTc+bAqrdwFypsaXWwUlRY8UgJCZxKZsLjmyI2nJ6KVSQzZC5FaLqbKc2RmwG1kGG1tk/Mb4yjeE5OIT2SPYIcSn5vZGEJTiFGhuAF2FAk791a8HBSEI7o0NxUN+hTh7wbXVvwVF1PayNUtwJshwnkdcKbYsqT2WFk5srIxq6TuqbpMK7qkdhcLKuc3WjGjscPEBQpp7Xtuh89nLPrJi1y5+e69uj403tpxPBKttLSAsGCou0WKtU85c5YTJ05YNN0bXbdVVkoS51wrcDxYFxR/HbezbFaer2y3Z0r08r6eMtf6CM+6ytZqG/k+ZhPMw3tbougMTZR5sBVp6WM3AaCn71qFLN7rkIKxjmMIO5Vkc0srGxtLnX2C136HHUuwwA9LBaOl0lJpMjhG7xJD63O6eyUl+1ZWfTnpKGc1DCYzyN7q7pbw2eWNxs57ThW9Q1uFlX4YY1zRkkKrJV6fNK14Hhy29SNyX1R+O2e4k45F07lmVlfHT3Ila8D/KFTa1BIQ1zrHpdOZzpOXDlremk/ZAep+M14uCCChuVsgXG6jdO8eZJtiUBAnCxtcf5HW7LYkFgSsHW3jlN+yWXS8O3meuOf+aDYzZz3ct1sUunySUgjMjhEwcoIxf3WDrsrG6rTc7uVhkAJXcS2jpmsiyCOixzupJHfwYy22qui1QpoPyFR5XDDHnZw+VYnoy5191SexsjOWVt1VlkrKVn7HOXEmzY35BUSab3Lc9NIROY4AI/O4DdY8GuvicWarAYi02MjMtutOKspqpvNBK149ijSYtQVjmmzjhWp2tqqYvt5gsxsbXu3stalaY6eRjuoSlPKfbFMbmnbZHbdwBJuiSblQj3UnqUJ8Y3IBTNbc7DHsrhZcJmxWyVPsahU8wgPlaL91dGsVHLbmIAVF7LlNyWCrdibjL2O/U53HLiq8tZKRfmKRjwExi3S3ackirK50m/VBEFytAQ4T+FZBqLYLI8bLKwGYTBtigJRNu4L0PgFo/OTe0QXn8eCF3v4eO5q+qcdhGAtuH1XN8n3g7kxBwTCAC9gn8QByIyQHbddW3m6V3NLUCSR3NZX3kEdFUksNlUpKjnm+VJjz8KEhUGu7qoNLbJrIzJ7jKzy4WwotcWnqlYNNljgeuETlG6zYZsZVlsx7qfZ6FkaLHsqUrBzC3dHfMM3QHPBcLK4VbEItAFIeyaH7ASAyUBGfZVpFZmGAq7t0AK1lN/pFkzhnCdwwglunv4YRGjKjT/AGgpgZQonITgiuQzuUhQnKMX3Anemi+5ZMlxRdspf3UTskaBIUFM7qB7pkcbp3bJhbok/bKAaPsU0/oPwnj3Sn9LvhAeQg+cqTSVC/mKm326rlddWYj3VuM+U2VKIq5F6SnEVkaldtZGe6yeMW8+iy/0rX1cWmiKzOJRzaRL/SkruOG/Ch9pqtnZy9apCLBeQ/habanXMv1XrdIcKsu04/pE631xn3VbU807vhWq30tPuqmp/ujvhTTjyPiE/wDOYvlaFUb0lvZZnEJtrUXa60qnNM1V9HPt3fDzeTSqYfyrfgwFi6MLadAP5QtqHYXSgyW4ynmP0ymj2GUpvtlUzZ8X3m46roIOi5+K3jt+V0ENsJ8Zcg1V6h8KMf8AonqPUPhMxasjjcq1TFVDurNMcoA8m2ENp7ojxdpQ2oJZgPnb8rbo/UViQetq2qTcpnO1LiAfRb8rFhj5jstzXReALJgIYAmV7EMFwFaggFtkwcHAFHjIvgpGRjACk1owk43O6mwY3QYjGIgZ2UGGyKHWGEA3Kn5Qm5kuYINLkCVhdLmuoFyAJyg9E4ivsE9PZ7gFptY0DZK3RybZfh2TSNFlozRDlJAysud5Y4g7IK+gXerCZxUhZycsuiC7ZNZEZCbbLPfSnsukMI6hDdTt7Kts7i5s0vWyydYpXNubYOy7c04PRAq6BlRCY3YPQ9lGeMyml8duF283bIWY2V6lnaG75S1jT5KaZzXixvv3WVzOYbBcGUuNeljZnPToW1Vxgq7SvAy5czBOeYXK16aYuaACnjknLDTWdVkYvhSgqGvIuVh1NRyv5QrFFL/EqmSLx+tujbVBjbMFsZK46v1k0eoTGcFsDjbmA2W94rRE51wBbqq40en1SmcKgjlKu7vRYaw95RybpOeV8niB7XG4c04QJ5HAnzY7rO4y4CraJjptH1GVjD+knC4jR4dcpKmRuoTyOiG18grLLGzt24ZY5e8XbEh9Q0TutHfJW0+mp3x+VrSLYsuKpKzxbsnkLXA2ytqiIBFqk8vYFExpcmUv22YxJSuYGOLmHoei2Y3FzQfZZ1M+J9gXi491fYWgCxW+Hp53Jd0790zfUbpOPmSb6grZmmaeQrldcLuVxK7B7biwXNa5BaJ9xkJZz0vjvt5fXUY1DV4YXbA8xXT1EdXQwjwQJogPSdwsbR3A8VyRuG7DYrtwxphdzi56Bc+dr0OGOSbrVPI4xyAxSDcPFldpwPC/MPF3vxE3sO6s1WmU1ex0c8TSD/lZNbBWaXeZzjU0rAGtaB5mN/8AKWvKNLfGtAwRvhLXNBvvfqqlNSMppPptDQeyJQV0VdCJIHXB6dQrLWF3yi+hjNrdMBe5WiX2jx1CqUMBLwHYHdWpyOYhuwwETosu9KUrcp4WHsi8lzsjRxqdK2TWYTOHRGsokC6ek7C5O6YsyjO2wo56pALkSLbI/KbKNkAGyRbZF5TlLluUj2Fy4UC3KtcuMqJjBT0SvbOF3n4fMLKaqmtbmIaCuSoNPmrqpsFOwucdz0aO5Xpmm0MenUMdNFnl3Pc910cOP25fk5yzxi495wVKOVwOcqBy1M05yulxaWDMSEF8hOFLFkN4QNQF7r7od0R1+yhY9kx6SbsnvdO1hI2KfkdfZA3EmXvhGbshsa7sjtYbJDcDk2QubzC26sPjJCD4dnZThWxvUxvTt7qbd1CnxTtUmnKEmqLWCrPBurMw2Vd26BQzvdO7ZMU5uAEBcgH01MepRg+0O6mN8IOGI/yhu2RXbobuqQoLt00P3E7wlD9xMlpRcRZSKi7ZIwyoki+FIhQ3KZJDdPIcJhunkGEA0Q3TT+h3wni90p/Q74QHjvU/Km0oV/MflTbYlcrrqzEcq5EVRiNiOquxHGE0Vn60LNYexWXrQ5tKkHcLY1kXprnoVk6h5tNf8JXtU6eb/hy/wuJKyPuvYKMrxbhF/gcbysOzrr2ajOBlVl2nD9VqsF4R7KlqGaR3wr1VY05VCszRn4Spx5DxKbaxF8rUkF4Ge9lk8VY1aI/zLUYbxxD3Cf0c+3oemC1HCP5QteA4WVQ+WCK/8IWrAeqULJaYlOfplJhTT/bKpKnSC9S1b8JyAsGlP7Q2y3YjtZVxp5Bqn1N+FEKVTu34UWLRmdwyrFNuq782R6f1BBLT9igtvdGOxQhuglmlzKB0W1SeorGoheUXWzR+pyZztW1z92XO+LbddFrovRkhcqRlA1teZPsL5R21HKN8rOjYbZRg3+6W1TFfZUEkZRhU+6zQNuim0FLyV4tEVPupirHdZgBUwEvKn4tEVYU/zIKzhgqQ2RujTQFSAkagEKjc7XSujY00IKotlHZdBC/xIw5ciD1W7pM92hrkDpqLJ1SB1yQtZDqGCSMgpyllNxztO4i4dujGQDqh1DPDkJCpSyE3AKnqnPcXvGHdM6cWWU17idyiAnGUeVExX/Gyk6UDqqQF0zwjyp+B6+GGuiLJAL9Hdlx+paQ+B7ja7ehHVdc0d1NzGvbyuFx2KjKTLtWNuPTzowOY/Y2WjQnBv2XQ1ejNeSYrfCzXafJA+5abBZfi101/NL6rnpqi9U4HoVpUcl4zZZWoU7oKs82ATgq1RvMQcN+qxksvt0ZauMsWNXkf+UsxxHKbmyLptefyPKx3mG6qBxnjlYdyLhYTXSxyc0Ty0gqvLV2WOPljpe17VJJ5BES4NG4uqMbY3R3IBv3QtQqGF3iVDXNd1LRgrPGuadEeV9SAfcJX23xmp6HraOncSSwXssiWJkbjy8w/utV9XTytu2QEO2I2Q3abNJ5mtLmnayXjVTOTuub1TXp9KjYWM5ubIuVPhnjuer1WOjqGWbJ6XA7FF1vhGt1QxhhMZYLAkdFLhv8AD2XT9TiramcO8PIaButcZHBzZZ+X1p6PSTeI253VpvRVaaLkHZWtrLeOarLdlzvFEoEbrC1gujp28wWFxRRPex/LnmGE8p/kcdnk4TQaYGWaqIu8uwtp8/jt8hyNwEDSad9LE6OUWcXGyBX0Mj6n6LnRuOzmrkynt63FfXpfhfjzCxU5ow9hDsgrLlkr6WNt2MnsPgqzQ1jKyHmYHMcMOa7cFUVjMGnMpKoyQeVrjkDZaUUfmBRZGF5t1R200sNM6Z//AGgpa8h5eE3VmNoawDqhuaSbBE04GZsRlyXbrQqaYNjeIxYhXOO1heeS+1BsRFrqfKO6IIHOpA44dsqzIpnGwO3dH47BOaUUi6ZzLqzBSyua4vcByi+ESGkMrrBwCX48j/LgpBifkxstmLR5HOa3xGDm2VyHhuWaTkM7Go8Mh+bD+ub5cJi1ddDwswyiOWpOTa7QtSPg/Tmmz5ZnEe9k5w2ovycY885N77KcED5XhsMb5HfyhelR8PabB6aYPP8AObo7IY4BywxsYP5RZaY/H/tZZfLv/GOAh4e1CYX8IMH8xWnR8JFzgaqfHZi6611OEfC1nDhGF+RyZfYOn6bT0MPh0sYYOp6lWXRHujsFgk7/AArRuq7YsWul4IvujYCYuFkF7JsYsmMbbbKYcExejcGqEWC6jyAG6k5/soGQ9kbLQgGE9h0Qg92wATl7iltXjRgMojBhV2FyI1x7oGtJu6qu8ebdEeSq7hnummtym+wERtrodH+7NRG7oENONgqz91amtjuqz90GGU52SIS7IJdh+0FNtrqER+mFNuLoOIu6qDt0Q7obt7pChP3smh+4k4dk8H3EyWiolSO6g5Iw3KB3U3dVE2TI4xunePKmaLKUgs1ARjCU/od8JRdk0/odjogPGhubd0QIN/Mbd0QH3XI61iIkWzlXoTss+I2tZXoNsppoWrC9I+yxKjNA8ey3q8Xpn9cLBkN6Nw9kU8enlFG78vx5GQbXcvaaMrxLUj4HGdO/u8L2jT3Xa0jqAqy+k4dVqzC8DvhZ8xvROFloOF4XLPcb0jx1Spx5BxhjVIv6lp0vm8Ae4WVxqbanFb+JaeneZ1P1yE/oTuvSKSwjj+AtSFZdMLMZ8LThvgqYMlpuB7qFQbRlEbvdCq/tG2FVSFpw5piXdFtQmxAWRpeXuuFrx+oLTDpGfY9UTdqGESqyW/CGBYYVoSdsEenOQgG9so9MBdBLTtkIYKKdkK2d0Et0P3Qtmj3dZY1D90LZo/U5M4HqjeemeFyz2crsrrNQ+w7suZnIL8IH2TLWCn7KAOMKQ23WbaELKbSL4QuuU4KANfCbmUOb3SvlAGDr9VIOQWqYwgCB19k982Qxjqnvm6QEB2ur9FMY3g9FmjdFZJY2umHUwVTXgBxsUZ8rA05XOQPvsVYfPytyiX+jVR1BwJNlkvO5CLPOXvPZV3u8pSvsSaQjyVZY26oxPsVficLC6KcFY3snewJ2OG/RO45wkYXIBsphotkpWTF4GEBJzQAom36sjrdRMvRU9SnLKctabOfgfCuXU2w5cfKyRiaqxlfUljWN5AcWH+qzJaX8tJyc3ONr9VuQsbFEXD1qhO25Lj8rHxl91vjlcZqdMc/SlwqMkYbKexN1s/lxIwdzm6ytRhc0ObfzDYhZZ4adXFy79K9VC0Acwu0rmtU0elq3WLQL7ELUjqKlsjo5T4kXbqEKaNzZWcpJac5Wf/p1Y+u3NR6PV0POymeXQuFuU5t8LT0jV6/TY2x1LfGY3APVbzHDl8wVarERFuQZVeVibhjn3FuLienc0FzHtJ6K3FrtM+3MCL91x9fECPIeWw3XB6hqUwlk5auRrgbcoV45ZVz82HFxSb298jq43gFpBBR2vDhdeUfhfqtdXVc9JVF8kLW87HkbHsvVIGkNF1tN/bjuu8WnR2DLqtV2lkAtcBTbJyRWG6gwAm5Wm/pE/rG12GNkLXDD72FlnAvjAJaHHa6t6rN49aIxlrDZV5Nr26rDLGW7dfHyXDHRCDx7XAbdQZpcMTufJe456K7ALFh9kUguLb73VTCaLLly/pqSniaT9MEg7lQ1m35cNt0V2BtnWHVU9bw3l9letRnu3L2q6UB4MV82K2CA4OthZent5aeLHVa7WnkdcJYll2ol305Gf3UKZgIymeD+YvfDt1bpIvqWthH2fUWOUNpnG2SFCj3adlYnsIyzYAKtSk2FuhTvpE6bJFmRPC0qOQmce4We2zqFvdrkejd9VlzgFBNVx5aqMjqVqOF3FZExzG7sVqh11UTe0Hgi+VTkLrlXpFUfa6JVWAeY9UWIHuokg/KnEblFokWY9t1JwxkpN2wk42yjY0GGhMRupjJUTuQgaJik7b3TMTuvZI9IWF1B4A2Uy6wQ3OvurjOz2jsVMWQwblSClaeLJw44URkWUmsKqM8jvKrk3KsvbjKA5oCr6Z/bcov3ZuUS55kOh/dgijdJcNLmyrSA3VqVVXblBhlP0CRwn7IJcjH0wpszdRj+2FJiFREqLrWUnKDtkioTzlKD7iZyeD7iZLRCiVNROyRhkKBGUQqBCZEnd6cqJKd5s1ANGmnPkd8JRJT+h3wgPFr+dw91Np6IN/OflEaVyx11Yi3V6nKz4zlXYTYoTR6oc0Dvhc5tTyA9LrpZB9M97Lmn+mZvYlFPF5LxR9PiWmf/ADhex6U/mgiN92heO8cAs1WB+3nC9a0J/NRU5/kCq9ROHdjo2ZiPws132pQtGIgs/ss2U2MoSPF5Bxx/1CP+paWjm8tL8hZ/HuKphP8AEruguvLS/ITnRY9vTafZq0ojss2n6XWlCpOrYvYINZ9oorDkIFceWIqqmJ6UPKStWPdZumD6APdaMe91rh0zz7WanPL8Ibdgpz5awoYVVKZGEamNigk+VGp8lBLZ2QiDfCL0UH5sgliiuJRlbVJu5YlGPqtW3R4cUznZtQF6Z/wuVlZy5XXVIvC4LmK5h5TZOTZW6uwWOwE9ws8PcCQp+Ie6m4VpM4ulwURIFSLnFO0m+6PAeS8190/MFTLiFF0h7o8B5RebKAeimZhZZzXWRGm5U2aXPa542PdLxlVukFKlxstzuozT8tiFXDrJnguBVxnk06OovY3WhIeZq5mnm8KQA7FbcMwcALqcsdHhlsN7T4hsFWqLtutJzA43CrVcV2p4+xluMcTcrlbhqDjKz6qMseLIkJNhlafjlZTl012TXtlWWOLjusmK60KUjGUvxw/y7X2x3ChJT9VZp3NvY7o/lOCjUguVZMkXK0ucbNAuVjyg1E5e8kNHTsFq6vO2N3hty7oO3usiSSwtf591nnfqHjvuoSuuwm1mjAVKXMbvhWJ5PKGgWVZwLjYZvhTF1CNnLHzO7YWDqVzz2K368iNnhj9IysGoHMPlTl0rDtWgo2y07XnD72ugVlHNTtfLM0OiNmtcOi1KQAQNH8ys1bAY2tIuDuCouEsbY82WN/6cVN4jj9CZzCs+Sq1GMkPDJAO43XYv0SKUOdE4xEZt0WbV6fNG24aHX7LK8djsw58MvSnoj6DUiYatjqecbAnDvgrUPB+kl/Oadryc3WFLA+NpEkJ5umFzlfxTVUE7oYjMzlOclVhv+MubGd3PUerUWnU1EwNpoWRj+UWVwC3UWXIcN6y7WdMiqYpXkg8rwdwQtimc58t3Od8Fb7cdw/7ask8cYJc8C26p1GpAxObECPdUZciU73Q2fZN/hFpzGQKlBc97zuivA8HuVGAWp3EHLnWRnN+mQlFWjU4uGfCuCMGUXsq1JHZrPhXCLPG2yuM7RIbOfiwWXrDueZzcWGFqUjfMSdgFi1R55ndrlGXQx7GphanjWkPSQO2VQhH0G27rQaMEfypYjLtTc0OeLDAV+kb5rkdFUhYXDPRX4xaA9DZPHssqFVOBz3Cr0/X5Uqhx8nuFGAi6MuxOm3T5pD8pEmMtcEOlf5OU7I84w33CpO2s53NAHD2K0WOuGfAWPTO5qQdei0oD6fgIhfay87qnJv1Vx6pSnKS0De6JAfMgkhEgOUBeZkJnDGyePIScgBDc2SJ3Tj/VRPVASaQncosKdxQQbghn4UzuVE7pggE6Ybp9kBJhzbqjt2VRpuVYYntOtpvODdVpLIsl7myrvBRseLc083ph8I43CBp+aYI4w5NJSjrdVnbqzKqp3TFMUyldMNggltvoCnH1UGegKbElRF2fZQKk5QcgqG/fZNT/AHEnpU/3CmS249lEpOUSkZnKJ3SJsoE5TJNRk2SBwlJsgFFuU09y13wnj33TT/bNtkB4l1Pe6mCgc3mPyiNPZcjrWoSrsJyqEZwrkJunErzrFi5qpxPM1dIMsXN6kOWteO4RRj28r/EMAVELuzgvTOF382l0rv5AvOfxFb9MO7OXecHSc2iUZ/kCq/rCx/auzgN2rOqCBLKFepDdqoVlhPJfskc7eR8fn9qZn9StcN5mpbnqFU/EA/tLT2crPC3mqKbrlVP1TP2eowGxHVacOSFmU/TutGEnqVEVV1uPZVtQPkR2nCqahsLKr0UXtO+w1X2bhUaEWhb8K6w53WuPTHLtZn9DEMeynN9tiGDlVUwToUWn3QhsiU+4QF39Kg5T6KDj2QQtKbSN+VvUe7lz9P8AcaVv0e5TOCzC8blkSUviNNwth/VBbblRLorNuTrqIxOJANlUa32XT6jymN1+y56w5jZay7iNaukeRPy2RBbonthJQDghlvsjuGEIi6qJoY3RGOQ3bp2FZZxtx1Y32TJmlTCyam6K1DHzNuqxO6t0hwEsrqbGlWtg8oI3CnSTG7QTlXZ2XZlUWs5JRZGGflEeOsm7B5mi6JPHdqhSEcjVaeLjGyUrS+3PV8PlOFlMeWPsV0lay4K56oYBLfqunDLccnJjZfS3E/ZX6d1rFZsFrC6vQvGE7RIvh5GRuFKatEVNznMjsNH/AJVdrg42v5RkqnM8zzEtGNgOwWdqp2rSvPMXPJc926rPcb53/wBlblj5f/JVOTJuNllZprKDI66PSM5Q6V3paFXI5jbqrNc7wKVkQ3IuUodZFZL4jnG+5VCVtxb2Vh2XZQnC7zdRkvH0ekafCt2Kuyt5gzCrU4IZ/dXP1tBzYJwsu0Q3lpnlZ9QDdgWnV+WmIB3WbNfxWjsqKBVLQS0FoKpzUVPPK7xaeJ9u7QtCouZWiyEwk85Iwkr60pUdPFTOLKeJkYJuWtFgr1PZ1yRlBafM5xFrBFpjdpcgWAyxXieW9+qG0Wp3XGVYdI1sRv1Ke7TTjsUxuqwaBTxgYySiyMHKAFOVgDIrbJ3t2FrZQNjQty2x/SEZw+r8BQiH1ALbBENjI/fZVEUSnxA5xWGMvffOSt2XyUZH8qxaYczXlLL+KwW6dv0m/Kusw8BVoQBGz26q0PW0ohVCFti4e6O42Ab2CaNtnuJ23Uea8j/hVE1SrD9s9VKDcFArCTy+xRoOii9r+mrAfQrsnmY34VGL0tV6T9PwrZrVD+5kdQStiBn02G24WNp/25W+626RwdTM9sIE7Sfj4VKU5KuSHdUZPUUlh/3RoOiFbKNB/qgLsZwncAmj2TlMkLZUTuiBRKQMzZScMe6Zid2ycAJUCiOuhnCAce6d2yYJ3IBmjKOy9kFoyrDNggByILzhHl9lXegNvTv3YIw3ygad+7D4Vho8ypmU5VR3dW51UKYpXTApjgYTjoglxhswKcfVQb6Qiw9UlQN/uLFDJWRGayOsENP+Zc1sh8R8osy3cd1ruxsgqC9PT/cTP3T0/wBxMlkqDvZTcoO7IMNwULqZCgflBJNKeTZRBHUhKR7QMkIB4kp/QbdkNk8bRlwQ56uLlI5hnCA8VNrn5U2d0G/mPyix3JXI7FmPOVbhKpxK1BgppaEZu0rn9aHJVAjqFvRHyrF4gFnRuRSnbzL8Qmj8m4ldTwFJz8P0hGcLm+PG81BJ8LW/DOXn4fhF/SbKv+In716PRm+FV1DEp+EaiOyBqvlcD1IU/Q+3kH4gj61/dWODDeqgAQ/xBHX3T8Au5qyL2Wk/VM/d6tTk3F1pRC1lm02/stKLooiqsjZUdQd9RoV0elZtc684CLSjbpPtN+FZZuLKtS4iaPZWGDzBbxje1qbMbShi+6nN9tqiEEmDZTgPmQ27YU4T5kyX2+kKPUqQ2UeqYPF6sLoKE4ysCP1hdBRem6BBJDgrJlqiwuAGy133sfhctWvtK8X6ogvZqyqc8EKkw3whvkJJupRm60nSbPY7eiR9ks/2SuP7IMN+EI5uiSHNlBVGdDcMJmmym7qhkWKWU3FY3VFa6yldAuQn5sLmvp1T2LfCsUkljbqqgdcKLZeR6LNzQvpv4fGqc8ZBBCJQzBwtdHmGFyY245aVZsqObIBWpE8OC5yR5ilBGy1KKoDjutr6uyl+hq4WaVy9a+02F1daOaEkLktQH1StsKWUPHPYIjKjOCqIOFb02Hx6tjXehvmd8BaIsmm02B5hiaTZz/M4dgnl5YW8jAL9SrDnWaXgeZ/+gVOSzQXSFJkrStLsk4VSa2ysPkMjj0aq78m25UX2uejUkQkmAOGjJVLU5vEmkI2vYLTxBSve7eywXnmPzlTl6Vj7DAvcoZGdke3lKhus6uCU7LhitRjme53bChTtwD2CMByRhXIm1XrTZrG9yqeHTK3V5lYD0CqNFnEjdBwpBef4CHAy4eitI5nl3ZKAANd7pGqclmSKUDbRHCmQfBd7uUoxaLfKBtWlZ9IfKk5pbELKUo8sY7qcwIaLbJgORv2x03U5RcgXTuF5GewTvxI1BDRAeMcbKUfmkeRuox5neEWBti75VxNQ1J3LSuHcWWdRRjwiT1Kuaq+5DUGBtqckdVN7VOhWAcrbG9yrJaLjKrxtIazorTW+YXThUqryQO5dzhBbiQduVGq3NDDfoqrpfqR22IVJijUOu9w91ap9h2VF1zUvBV2ntyrK9tPpqRfaafdXL8xbfsqVMQ6Aqwx2Rdas16hPmlW1QuHmA23WHR/dffqFqUbrTtHQhIb9rcu5VSS91bk3KqSDJSWgduyLAMoJ+EeDdAXY9k7ko7EXCZyZGGSmKdoTPwgGbbopO2Qg4XTl3S6ek3JF3booFOc7JrHskcpNScbBSax3YpnxSHZpTgtDfI5sL3MF3AXF1ZgeHxscNnC6ouoq6asp3eMY6WK5dEG5efc9lco4ZIbQzlrZOY8jb5IRUypyKu/qr8kDr2NggupT1dhJW40NN/dx8Ky3DgqdLIyGINLgndWxt2IVIWp/dVSMoMuosva9yqsmpMvgpheKcdFlO1MEYyVXdqxvZInT8wDN/wCyz4HVdXNFJO4UtM0Elkb7ucel1iyaq87OWZM8vLy2aoj5t+V5AQcrsKCuFTSiV7r3ceU7Xb0KJJVRA5cP8ri21nhRsYxxDGCwyhSV18l6A7KStiH6ggDVIY3HIXGu1JowXKtLqjQcFMadxLrjP03Kqya7jDdlxEmrC1wVXfqt72KR6ruH64/cABV363ITuAuEfqp5rFyFJqbrWBS2fi7l+syH9arSaxId5CuGdqju6H/xJ56o2fi7V2rEjMh/ymi1IOnjaXbuHVcK+teDuUbTq1z66nBP/qN/3SHilfzO+UaEjF91XvZx+VON4BXO6F+PdWYTlZ7JUZk4FrlGy02YiP7LI4iaPy4d2K0KWQvw0EoWs0c9TSOEcZJGU+0308u4wHPQyXzhP+FEnNpD2X9LylxSLUkgIs4AghVfwmkH5eqZ2eqn60v/ALj1iiORlNq48rSo0JyE+s/ZBU/Svt5T+IjbREoH4bXdWA9grX4gjmpXKv8AhYA6eU9gtJ+qP+b1em6LRjwPZZ1L2WjH0URVWG5Cy5Tz1rR7rTJABysuA82oIpRvxYaFYj6Ku3ojxlbxjVmX0NUQbp5PQ1MNuydKJtTxmz0zCk37iA0WelLqkweUJicoI7cPC6CgzED7LAtst/Ts04TEGfsVylew/mndrrq3ndZ9RRB93W3VYIztnuOWkaGu2TNw6y0K+DwrmyzBKAcq7NFjl5LY+cJPQWzNAynfUNtdJppF26bbcqtJVNvuhmrb3VM9LhyoO2uqjqob3TfmeY2BQXS1ZQJyoskv1SB8y5+Tt18fQo2VWqJGRurQOFWqhglLE8lvSqm5AJyFtl/M1cVS1Hg1NicFdJT1AcBlTy8fvbPjz36Srd0Chqyyo5HH4VqZhkysesjfDKJGjZVhjMpqly24+460TB8dr9FzuqN+thX9Om8djc9FfdQxS25slLDGy+1Xk3NxyrWk2W9oNLaB8shsHm2eyvDTIbizRdRrZW07CGD6bPKB3K0qLlaVVI1lyXAno0LLfzzv5n4b0CqzSOdJzE5U2zF2L2CnY0M6wGFBjC5wASLrjG3RS5xFE+U/pGPlMlTVJf0DYYWYBknqiSOL3EuOSbqPQrO+2k9IHDFCIcwuBuU8p8nsjUbLgKftX0PG3lCUpx/dEKryuy0dyqShUkeNb2VeNtw5WKj757WQmDyuKRgkWY8/2UYrtjU3n6RHulb6VvZBhPIMLbbkqZH0gAovaQ1gCU1/KAOqAhMCHR+ynOLge6aRpMzbnCm+xc0bICPL9f2AS/8AVF91MW8VxvYJAjx/hMJQZmebZVqNtgMe6r0pw423R3F3m6ABXPUTWdWEOlc4kWBTc48MW2Qp+o3ypgERC25Wdq1qJ3laTmystPK0vKBCzDb9lKpcOZkdznJVYxFV5Hl1M525uqrCSxhPQ2urkdhDLcbFU3SAxY2unTgT8Vg91chFiQqR804KutuJB7hQpo0X23Ao7LkAhV6E+Zw6o8WWu7XWk6ZVcpjab5C0YXWljd2KzIMPBV4G1igNeW9zZVXscT6StqKeDwWHkBPKE7quEDDG3Ro/JheDKR6HKxT0838BC0HagzoGqDtSaB0CNF5FHBJb0qRppD0sgHVf5gq8mri58+UaPyaDaR36iAk6kHV4WMdaYDlxQZNaYb+ZPSdt0UsQGXqQjpm9brlpNcAdh2Cq0utgE2KCdkX07dgFA1EAvgLiX62TkOQJNXc4HzFM3dGthG3Kq1RxBRUs0cMjrTyC7fKeUD3OwXCP1N+RzFBfqDp2hhs7m8tj1Qbr28Ts1DU4KXTWuna1zvGkaLRgf1dT8KrS1D6Wulqqp5ijDiDLI8FrR2b1XKsrY4Y6iKOSIRQDlf4brNa49LhZE3gxhktaXzAOJbzOPncBgBvb3SGq7yn16CjZUVNPFV1PjyG7nm9gBuAensmoNfq6oSzVjG07HfaivdwHdy4xtc6KmL2t8oaCG+KMXKmyqdI88skflbzuLn2sO5QNOxl1ixN3KvJrJ8N5bI1rgLgu2XIyVZfYh1wdrIclSWskNua7CAPfogadLqWtSMgaGyRNe+MtBLrEOPUDdQZqjSxlpObAz3XMxTkOhM3I5rGWItck/Kg+pcXkvIuejdgOyD06Wq1VzGQDnDA6TJ5gDZUIdWD2u5J/FcHuzY7X7rGbMzx6cuaDHGSSDm6BTVJbBZ4DSXE2/ugadMNRkexvJkF4D7b8vsenysyo1UujlPM6I+M1jGF5JcL7+6zDWWgdELkPPms63lQJa2NlI9gha6Rz2cp3IHUoPToH6i7mILsINRqXK1hYZZBzcoYbAHub7rEkqwDfB9kGSue4sc8t8gs0DYIGmvPWOLrkgewOyC6qJHqKxHVTi0l9mu7Aof5vNgUg2HTnm3UTM7PmssaSqJyCk6oJbugbaUs+cFJ01x6lkmZ1iSUQiZrAZI3tCD2tmWxJuoioDXbrOdIblQ5r9UFtpzT4uCi6VPfU6TP/AKrf91kPfdqs6Ob6pSf+63/dB7dK4eY5O6nDGHPySkkuWtq3aLTKeSxfzm/utun0ukjAIiBPukkrxkY5WrbYY2HyMA/snePIUklrUPEuMox41WBe3MVi/hWOWauaCbcySSifrWmP7YvWaAbZKNrDQaXqkkonTS9vMOO2A0b8nZUvwpb5qnJSSWk/Vn/9x6tSN8oyVpRi1kklH0uiPw12Vm0I/bTlJJH3CbzBhGYkkt4xq0/0MUUkkFBGjKm0fUSSTJfYPKEzh5gkkgJLd0r7ASSTEWH7qzygwC4SSQbntZjaWHC4ysJbJgpJLf6c2P70HxX23Q5pXhhykks3VembPNID6kHxpMeYpJLVy2p+I8/qKPTklxu4pJJVH21qZuBkq5HG3CSSxyduHQ7Y2lCqY22SSSimBVtAluO61aBzi1tykkry/Vjh+9dBSNBiF0DUImmJ1wkkuSfs3z/VnaS5zJHNaTZdHTvdyg3ykkuy9uXDpcp3kuJJ2BKw9WJvG25tbm/ukks8mmLMA8hPW6a1m47pJLNYjHEEC+FCukc7lYT5QL2SSTvQnai4ZTEeVJJQsCYY3KuU4s0W7JJIxGXQtv8AZVpPvsHRJJNMRkuZXklRjHkekkhQUg+j/dJwsxJJIGkHmb8BQkJ5hlJJMGP390xF5W3SSSMmDzuyU4H1TnokkmFilbaI27orhh57BJJX9IvbHPm5iTm6tNaC1qSSzi6uRC7mqtUD9sJuUklafsFl/BmyVn58F2T6kkkqqHiHmvcrQAyzJSSUnV+gH1h7qzCPO9JJaTpll2ND69+qu2wkkmQss8jGNDXWFlSNVNz+spJJkC+ol5z5yguqJb25ikkgKstTLf1ndAmnkDvWUkkGA6V5yXFO57uTcpJINXlc64yozE2GUkkjV7m5ylc8u5SSQIC8m/qKGCRfzFJJBw8rWU1LDHDGxokBkcbZLu6FNflc5xLnlzbuOTskkkDeX8lK97GPcCB5gqT2NkDy9oPi+sdCkkg2nBTsfSscb3t0RZaaOIRFt7uFzc36pJIAMMDJX3cP0k2HzZVGRNdS1MrrlzDZvtlJJILDqKL8y1vmt4fNv1QJYWRTvDBuzrlJJMIGiifG955ubxGtwehUf+HwGaYeazGggX7lJJIBw00dTOY5BZgcRZuNkAUEP5eF/mLnyFpz0ukkgHqKKBrhG1lmtsfc56obaWKaoELmgMuwYwckpJJkjU6fBHSVUjQ7mjkLW52Cyw3y7lJJMjwN+rHm45grcLXO1V7PFkDS8k2O+EkkjZ7G3AJJuVHl9ykknCS5ByjJVzRmD/iVIbn7rf8AdJJIP//Z"

/***/ })
/******/ ]);