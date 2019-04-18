(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vuejs-datepicker-mobile"] = factory();
	else
		root["vuejs-datepicker-mobile"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "16a4");
/******/ })
/************************************************************************/
/******/ ({

/***/ "04ac":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("4d65");
var dPs = __webpack_require__("9208");
var enumBugKeys = __webpack_require__("2ba0");
var IE_PROTO = __webpack_require__("5ee9")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("bce2")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("5b58").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "04be":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "0709":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("9102");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "0763":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "0799":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("91ef");
module.exports = __webpack_require__("836e").parseInt;


/***/ }),

/***/ "0bc6":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("38cc");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "0d0d":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("54a3");
var toLength = __webpack_require__("33f2");
var toAbsoluteIndex = __webpack_require__("8da8");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "13c4":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("1dff");
var global = __webpack_require__("4839");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("4725") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "16a4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.6.0@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("e67d")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.3@@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("208e");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6a83156a-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/components/Picker.vue?vue&type=template&id=267ea88c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.show)?_c('div',{staticClass:"m-picker"},[_c('div',{staticClass:"m-picker-mark"}),_c('div',{staticClass:"m-picker-box"},[_c('div',{staticClass:"m-picker-header"},[_c('span',{on:{"click":_vm.cancel}},[_vm._v("取消")]),_c('span',{on:{"click":_vm.sel}},[_vm._v("确定")])]),_c('div',{staticClass:"m-picker-content"},[(_vm.type=='datePicker')?_c('div',{staticClass:"m-picker-item-box"},[_c('PickerItem',{attrs:{"val":_vm.year,"selType":'year',"change":_vm.change,"d":_vm.dataList[0]},on:{"update:val":function($event){_vm.year=$event}}}),_c('PickerItem',{attrs:{"val":_vm.month,"selType":'month',"change":_vm.change,"d":_vm.dataList[1]},on:{"update:val":function($event){_vm.month=$event}}}),_c('PickerItem',{attrs:{"val":_vm.day,"selType":'day',"change":_vm.change,"d":_vm.dataList[2]},on:{"update:val":function($event){_vm.day=$event}}}),_c('PickerItem',{attrs:{"val":_vm.hour,"selType":'hour',"change":_vm.change,"d":_vm.dataList[3]},on:{"update:val":function($event){_vm.hour=$event}}}),_c('PickerItem',{attrs:{"val":_vm.minute,"selType":'minute',"change":_vm.change,"d":_vm.dataList[4]},on:{"update:val":function($event){_vm.minute=$event}}})],1):_c('div',{staticClass:"m-picker-item-box"},_vm._l((_vm.dataList),function(i,k){return _c('PickerItem',{key:k,attrs:{"change":_vm.change,"d":i}})}),1)])])]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Picker.vue?vue&type=template&id=267ea88c&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.5@core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("f10e");

// EXTERNAL MODULE: ./node_modules/_@babel_runtime-corejs2@7.4.3@@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("96f8");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.5@core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("ea65");

// EXTERNAL MODULE: ./src/css/style.scss
var style = __webpack_require__("cb43");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6a83156a-vue-loader-template"}!./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/components/PickerItem.vue?vue&type=template&id=061825b4&
var PickerItemvue_type_template_id_061825b4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"m-picker-item"},[_c('div',{staticClass:"m-scroller-indicator"}),_c('div',{staticClass:"m-scroller-mask",on:{"touchstart":_vm.start,"touchend":_vm.end,"touchmove":_vm.move}}),_c('div',{staticClass:"m-scroller-item-box",style:(_vm.domStyle)},_vm._l((_vm.d),function(i,k){return _c('div',{key:k,staticClass:"m-scroller-item"},[_vm._v(_vm._s(i))])}),0)])}
var PickerItemvue_type_template_id_061825b4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/PickerItem.vue?vue&type=template&id=061825b4&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.5@core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("f91a");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.5@core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("b06f");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.5@core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("48fb");

// EXTERNAL MODULE: ./node_modules/_object-assign@4.1.1@object-assign/index.js
var _object_assign_4_1_1_object_assign = __webpack_require__("7593");
var _object_assign_4_1_1_object_assign_default = /*#__PURE__*/__webpack_require__.n(_object_assign_4_1_1_object_assign);

// CONCATENATED MODULE: ./src/modules/util.js







var util_mergeOptions = function mergeOptions($vm, options) {
  var defaults = {};

  for (var i in $vm.$options.props) {
    if (i !== 'value') {
      defaults[i] = $vm.$options.props[i].default;
    }
  }

  var _options = _object_assign_4_1_1_object_assign_default()({}, defaults, options);

  for (var _i in _options) {
    $vm[_i] = _options[_i];
  }
};

function add(a, b) {
  var c, d, e;

  try {
    c = a.toString().split(".")[1].length;
  } catch (f) {
    c = 0;
  }

  try {
    d = b.toString().split(".")[1].length;
  } catch (f) {
    d = 0;
  }

  return e = Math.pow(10, Math.max(c, d)), (mul(a, e) + mul(b, e)) / e;
}

function sub(a, b) {
  var c, d, e;

  try {
    c = a.toString().split(".")[1].length;
  } catch (f) {
    c = 0;
  }

  try {
    d = b.toString().split(".")[1].length;
  } catch (f) {
    d = 0;
  }

  return e = Math.pow(10, Math.max(c, d)), (mul(a, e) - mul(b, e)) / e;
}

function mul(a, b) {
  var c = 0,
      d = a.toString(),
      e = b.toString();

  try {
    c += d.split(".")[1].length;
  } catch (f) {}

  try {
    c += e.split(".")[1].length;
  } catch (f) {}

  return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}

function div(a, b) {
  var c,
      d,
      e = 0,
      f = 0;

  try {
    e = a.toString().split(".")[1].length;
  } catch (g) {}

  try {
    f = b.toString().split(".")[1].length;
  } catch (g) {}

  return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), mul(c / d, Math.pow(10, f - e));
} // 取余


function rem(a, b) {
  return sub(a, mul(parse_int_default()(div(a, b)), b));
}

function getDate(date) {
  var arr = date.toString().split('-');
  arr[1] = arr[1].length === 1 && arr[1] < 10 ? '0' + arr[1] : arr[1];
  arr[2] = arr[2].length === 1 && arr[2] < 10 ? '0' + arr[2] : arr[2];
  return "".concat(arr[0], "-").concat(arr[1], "-").concat(arr[2]);
}


// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.5@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/components/PickerItem.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PickerItemvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      startY: '',
      // touch start Y
      endY: '',
      // touch end Y
      lastPoint: [],
      value: '',
      dY: 0,
      itemKey: 0,
      // 第几个值
      changeY: '',
      // sY - eY
      domStyle: {
        'transform': 'translate3d(0,0,0)'
      }
    };
  },
  computed: {
    itemHeight: function itemHeight() {
      return (+window.getComputedStyle(document.querySelector('.m-scroller-item')).height.replace('px', '')).toFixed(2);
    },
    // 选项长度
    itemLen: function itemLen() {
      return this.d.length;
    }
  },
  mounted: function mounted() {
    // 初始化，定位第一个
    if (this.val) {
      this.moveTo(this.val);
    } else {
      this.dY = mul(this.itemHeight, 4);
      this.domStyle = this.style = {
        transform: 'translate3d(0px, ' + this.dY + 'px, 0px)'
      };
    }
  },
  methods: {
    scroll: function scroll(y, t) {
      // 根据选项高度判断定在哪个位置
      // y = y -y%this.itemHeight +(y%this.itemHeight>this.itemHeight/2?this.itemHeight:0)
      var cTop = rem(y, this.itemHeight) > div(this.itemHeight, 2) ? this.itemHeight : 0;
      y = add(sub(y, rem(y, this.itemHeight)), cTop); //最大最小情况的判断

      if (y > mul(this.itemHeight, 4)) {
        y = mul(this.itemHeight, 4);
      }

      var sT = mul(5 - this.itemLen, this.itemHeight);

      if (y < sT) {
        y = sT;
      }

      this.dY = y; // 记录现在的位置

      this.itemKey = div(sub(mul(this.itemHeight, 4), y), this.itemHeight); //第几个值

      this.domStyle = this.style = {
        transform: 'translate3d(0px, ' + y + 'px, 0px)',
        transition: "all " + t + "s cubic-bezier(0.1, 0.85, 0.25, 1) 0s" // 停止后的回调

      };
      this.change(this.d[this.itemKey], this.itemKey, this.selType);
    },
    start: function start(e) {
      this.startY = e.touches[0].pageY;
      this.domStyle = this.style = {
        transform: 'translate3d(0px, ' + this.dY + 'px, 0px)',
        transition: "none"
      };
    },
    end: function end(e) {
      this.endY = e.changedTouches[0].pageY; // 非线性衰减

      var t = parse_int_default()(Math.sqrt(Math.abs(this.endY - this.startY))) / 10;
      this.scroll(this.dY + this.endY - this.startY, t);
    },
    move: function move(e) {
      e.preventDefault();
      var dY = e.touches[0].pageY - this.startY; //差值
      // 反映差值

      this.domStyle = {
        transform: 'translate3d(0px, ' + (dY + this.dY) + 'px, 0px)'
      };
    },
    moveTo: function moveTo(val) {
      var _this = this;

      if (this.selType == "year") {
        this.itemKey = 0;
        this.d.map(function (v, k) {
          if (v.match(/\d*/g)[0] == val) {
            _this.itemKey = k;
          }
        });
      } else if (this.selType == "month" || this.selType == "day") {
        // this.itemKey = +this.val -1;
        this.itemKey = 0;
        this.d.map(function (v, k) {
          if (v.match(/\d*/g)[0] == val) {
            _this.itemKey = k;
          }
        });
      } else {
        // 日期外的 如果后面需要做成其他类型
        this.itemKey = 0;
        this.d.map(function (v, k) {
          if (v.match(/\d*/g)[0] == val) {
            _this.itemKey = k;
          }
        });
      }

      this.dY = mul(4 - this.itemKey, this.itemHeight);
      this.scroll(this.dY, 0);
    }
  },
  watch: {
    d: function d() {
      var _this2 = this;

      if (this.itemKey + 1 > this.d.length) {
        this.itemKey = this.d.length;
        this.dY = mul(4 - this.itemKey, this.itemHeight);
        this.scroll(this.dY, 0.4);
      }

      if (this.selType == "month" || this.selType == "day" || this.selType == "hour" || this.selType == "minute") {
        this.d.map(function (v, k) {
          if (v.match(/\d*/g)[0] == _this2.val) {
            _this2.itemKey = k;
          }
        });
        this.dY = mul(4 - this.itemKey, this.itemHeight);
        this.scroll(this.dY, 0.4);
      }
    }
  },
  props: {
    change: {},
    val: {},
    selType: {},
    d: {
      default: function _default() {
        return [];
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/PickerItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PickerItemvue_type_script_lang_js_ = (PickerItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.7.0@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/PickerItem.vue





/* normalize component */

var component = normalizeComponent(
  components_PickerItemvue_type_script_lang_js_,
  PickerItemvue_type_template_id_061825b4_render,
  PickerItemvue_type_template_id_061825b4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PickerItem = (component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.2@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.5@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/components/Picker.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Pickervue_type_script_lang_js_ = ({
  name: 'datePicker',
  data: function data() {
    return {
      show: false,
      type: 'picker',
      dataList: [],
      year: 1,
      month: 1,
      day: 1,
      hour: 1,
      minute: 1,
      endTime: '',
      startTime: '',
      onSucceed: function onSucceed(e) {
        console.log(e);
      },
      onCancel: function onCancel() {}
    };
  },
  computed: {
    isR: function isR() {
      return this.year % 4 == 0 ? true : false;
    },
    startTimeArr: function startTimeArr() {
      if (this.startTime) {
        return this.startTime.split('-');
      } else {
        return [];
      }
    },
    endTimeArr: function endTimeArr() {
      if (this.endTime) {
        return this.endTime.split('-');
      } else {
        return [];
      }
    }
  },
  methods: {
    sel: function sel() {
      this.show = false;
      if (this.month < 10) this.month = "0".concat(this.month);
      if (this.day < 10) this.day = "0".concat(this.day);
      if (this.hour < 10) this.hour = "0".concat(this.hour);
      if (this.minute < 10) this.minute = "0".concat(this.minute);
      this.onSucceed(this.year + '-' + this.month + '-' + this.day + ' ' + this.hour + ':' + this.minute);
    },
    itemSel: function itemSel() {},
    setMonth: function setMonth() {
      var c2 = this.month == 2;
      var c1 = [1, 3, 5, 7, 8, 10, 12].join().indexOf(parse_int_default()(this.month));
      var m = '',
          newM = []; // day

      if (c2) {
        if (this.isR) {
          m = [1, 29];
        } else {
          m = [1, 28];
        }
      } else if (c1 < 0) {
        m = [1, 30];
      } else {
        m = [1, 31];
      }

      var mArr = [],
          m2 = [1, 12]; // month

      if (this.endTimeArr) {
        if (this.year == +this.endTimeArr[0]) {
          m2[1] = +this.endTimeArr[1];

          if (this.month == +this.endTimeArr[1]) {
            m[1] = +this.endTimeArr[2];
          }
        }
      }

      if (this.startTimeArr) {
        if (this.year == +this.startTimeArr[0]) {
          m2[0] = +this.startTimeArr[1];

          if (this.month == +this.startTimeArr[1]) {
            m[0] = +this.startTimeArr[2];
          }
        }
      }

      for (var i = m[0]; i <= m[1]; i++) {
        newM.push(i + '日');
      }

      for (var _i = m2[0]; _i <= m2[1]; _i++) {
        mArr.push(_i + '月');
      }

      this.dataList[2] = newM;
      this.dataList[1] = mArr;
    },
    // 确定数值的回调
    change: function change(val, key) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      if (type == 'day') {
        this.day = val.match(/\d*/g)[0];
      } else if (type == 'year') {
        this.year = val.match(/\d*/g)[0];
        this.setMonth();
      } else if (type == 'month') {
        this.month = val.match(/\d*/g)[0];
        this.setMonth();
      } else if (type == 'hour') {
        this.hour = val.match(/\d*/g)[0];
      } else if (type == 'minute') {
        this.minute = val.match(/\d*/g)[0];
      }
    },
    cancel: function cancel() {
      this.show = false;
      this.onCancel();
    }
  },
  mounted: function mounted() {
    this.setMonth();
  },
  components: {
    PickerItem: PickerItem
  }
});
// CONCATENATED MODULE: ./src/components/Picker.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Pickervue_type_script_lang_js_ = (Pickervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Picker.vue





/* normalize component */

var Picker_component = normalizeComponent(
  components_Pickervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Picker = (Picker_component.exports);
// CONCATENATED MODULE: ./src/modules/index.js




var modules_Picker = {};

modules_Picker.install = function (Vue) {
  var t = new Date();
  Vue.prototype.$picker = {};
  var CalendarMainCom = Vue.extend(Picker);
  var instance = new CalendarMainCom({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);

  Vue.prototype.$picker.show = function () {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var date = new Date();
    instance = assign_default()(instance, {
      show: true,
      type: 'picker',
      // 默认选择器
      data: [],
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      startTime: '',
      endTime: '',
      date: '',
      onSucceed: function onSucceed(e) {
        console.log(e, '选中回调');
      },
      onCancel: function onCancel() {
        console.log('取消回调');
      }
    }); // 如果是日期模式

    if (settings.type == 'datePicker') {
      var years = [1950, 2050]; // 有设置开始时间

      if (settings.startTime) {
        var startY = new Date(getDate(settings.startTime)).getFullYear();
        years[0] = startY;
      } // 有设置结束时间


      if (settings.endTime) {
        var endY = new Date(getDate(settings.endTime)).getFullYear();
        years[1] = endY;
      } // 两个都设置了


      if (settings.startTime && settings.endTime) {
        if (new Date(getDate(settings.startTime)).getTime() >= new Date(getDate(settings.endTime)).getTime()) {
          years[0] = 1950;
          settings.startTime = '1950-01-01';
        }
      }

      if (settings.date) {
        var setDate = new Date(getDate(settings.date));
        var end = new Date(getDate(settings.endTime) || '2050-01-01').getTime();
        var start = new Date(getDate(settings.startTime) || '1950-01-01').getTime(); // 验证输入的年的范围是否正确

        if (setDate.getTime() >= start && setDate.getTime() <= end) {
          settings.year = setDate.getFullYear();
          settings.month = setDate.getMonth() + 1;
          settings.day = setDate.getDate();
          settings.hour = setDate.getHours();
          settings.minute = setDate.getMinutes();
        } else {
          settings.date = '';
        }
      }

      var months = [1, 12],
          days = [1, 30],
          hour = [0, 23],
          minute = [0, 59];
      var yearsList = [],
          monthsList = [],
          daysList = [],
          hourList = [],
          minuteList = [];

      for (; years[0] <= years[1]; years[0]++) {
        yearsList.push(years[0] + '年');
      }

      for (; months[0] <= months[1]; months[0]++) {
        if (months[0] < 10) months[0] = "0".concat(months[0]);
        monthsList.push(months[0] + '月');
      }

      for (; days[0] <= days[1]; days[0]++) {
        daysList.push(days[0] + '日');
      }

      for (; hour[0] <= hour[1]; hour[0]++) {
        hourList.push(hour[0] + '时');
      }

      for (; minute[0] <= minute[1]; minute[0]++) {
        minuteList.push(minute[0] + '分');
      }

      settings.dataList = [yearsList, monthsList, daysList, hourList, minuteList];
    }

    util_mergeOptions(instance, settings);
  };

  Vue.prototype.$picker.hide = function () {
    instance.show = false;
  };
};

/* harmony default export */ var modules = (modules_Picker);
// CONCATENATED MODULE: ./src/index.js

/* harmony default export */ var src = (modules);
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.6.0@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ }),

/***/ "16ef":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "1787":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("4f1d");
var gOPS = __webpack_require__("6b32");
var pIE = __webpack_require__("5f84");
var toObject = __webpack_require__("7182");
var IObject = __webpack_require__("ed52");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("7f67")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "18c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("31d0");
__webpack_require__("2d2c")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "1a9a":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("fdb5");
var toLength = __webpack_require__("3202");
var toAbsoluteIndex = __webpack_require__("ec18");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "1d10":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "1dff":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "1f51":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("b429");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1ff3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("caa4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "201d":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "208e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8b64");

/***/ }),

/***/ "240e":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("9b6d");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "2b11":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "2ba0":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "2ce6":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "2d2c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("4839");
var core = __webpack_require__("1dff");
var hide = __webpack_require__("c84b");
var redefine = __webpack_require__("7f00");
var ctx = __webpack_require__("0709");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "31d0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("7fe4");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "3202":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("69fd");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "3301":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "33f2":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("ae63");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "38b2":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "38cc":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "3a0f":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("201d")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "3a22":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("4cf4");
var createDesc = __webpack_require__("0763");
module.exports = __webpack_require__("690a") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "3b80":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("2d2c");
var defined = __webpack_require__("2b11");
var fails = __webpack_require__("201d");
var spaces = __webpack_require__("2ce6");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "471d":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("a051");
var core = __webpack_require__("836e");
var ctx = __webpack_require__("8232");
var hide = __webpack_require__("3a22");
var has = __webpack_require__("38b2");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "4725":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "4839":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "48ed":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "48fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("66f5");
var anObject = __webpack_require__("4d65");
var $flags = __webpack_require__("7fe4");
var DESCRIPTORS = __webpack_require__("3a0f");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("7f00")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("201d")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "4bcb":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "4cf4":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("0bc6");
var IE8_DOM_DEFINE = __webpack_require__("54b2");
var toPrimitive = __webpack_require__("eb10");
var dP = Object.defineProperty;

exports.f = __webpack_require__("690a") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "4d65":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("b429");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "4df6":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "4f1d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("c540");
var enumBugKeys = __webpack_require__("b59a");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "54a3":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("240e");
var defined = __webpack_require__("2b11");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "54b2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("690a") && !__webpack_require__("7f67")(function () {
  return Object.defineProperty(__webpack_require__("d819")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "56f8":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("9b6d");
var TAG = __webpack_require__("f3ae")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "5b58":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("4839").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "5ee9":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("13c4")('keys');
var uid = __webpack_require__("75ff");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "5f84":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "62af":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("7cbd");
var hiddenKeys = __webpack_require__("2ba0").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "6629":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("836e");
var global = __webpack_require__("a051");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("4df6") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "66f5":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("3a0f") && /./g.flags != 'g') __webpack_require__("694f").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("7fe4")
});


/***/ }),

/***/ "6896":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("471d");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("1787") });


/***/ }),

/***/ "690a":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("7f67")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "694f":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("4d65");
var IE8_DOM_DEFINE = __webpack_require__("8003");
var toPrimitive = __webpack_require__("1f51");
var dP = Object.defineProperty;

exports.f = __webpack_require__("3a0f") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "69fd":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "6b32":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "6dd6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6f8f":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("13c4")('native-function-to-string', Function.toString);


/***/ }),

/***/ "7182":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("04be");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "7593":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "75ff":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "78de":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("48ed");
var createDesc = __webpack_require__("b915");
var toIObject = __webpack_require__("54a3");
var toPrimitive = __webpack_require__("1f51");
var has = __webpack_require__("3301");
var IE8_DOM_DEFINE = __webpack_require__("8003");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("3a0f") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "7cbd":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("3301");
var toIObject = __webpack_require__("54a3");
var arrayIndexOf = __webpack_require__("0d0d")(false);
var IE_PROTO = __webpack_require__("5ee9")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "7f00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("4839");
var hide = __webpack_require__("c84b");
var has = __webpack_require__("3301");
var SRC = __webpack_require__("75ff")('src');
var $toString = __webpack_require__("6f8f");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("1dff").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "7f67":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7fe4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("4d65");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "8003":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("3a0f") && !__webpack_require__("201d")(function () {
  return Object.defineProperty(__webpack_require__("bce2")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8232":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("1d10");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "836e":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "8b64":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6896");
module.exports = __webpack_require__("836e").Object.assign;


/***/ }),

/***/ "8da8":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("ae63");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "9081":
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__("a051").parseInt;
var $trim = __webpack_require__("e2d3").trim;
var ws = __webpack_require__("4bcb");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "9102":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "91ef":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("471d");
var $parseInt = __webpack_require__("9081");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "9208":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("694f");
var anObject = __webpack_require__("4d65");
var getKeys = __webpack_require__("d753");

module.exports = __webpack_require__("3a0f") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "96f8":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0799");

/***/ }),

/***/ "9b6d":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "a051":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "aa91":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("2b11");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "ae63":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "b06f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("4839");
var has = __webpack_require__("3301");
var cof = __webpack_require__("9b6d");
var inheritIfRequired = __webpack_require__("d62f");
var toPrimitive = __webpack_require__("1f51");
var fails = __webpack_require__("201d");
var gOPN = __webpack_require__("62af").f;
var gOPD = __webpack_require__("78de").f;
var dP = __webpack_require__("694f").f;
var $trim = __webpack_require__("3b80").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("04ac")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("3a0f") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("7f00")(global, NUMBER, $Number);
}


/***/ }),

/***/ "b21e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("56f8");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "b429":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "b59a":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "b915":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "ba15":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("6629")('keys');
var uid = __webpack_require__("16ef");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "bce2":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("b429");
var document = __webpack_require__("4839").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "c540":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("38b2");
var toIObject = __webpack_require__("fdb5");
var arrayIndexOf = __webpack_require__("1a9a")(false);
var IE_PROTO = __webpack_require__("ba15")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "c5aa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("18c5");
var redefine = __webpack_require__("7f00");
var hide = __webpack_require__("c84b");
var fails = __webpack_require__("201d");
var defined = __webpack_require__("2b11");
var wks = __webpack_require__("f3ae");
var regexpExec = __webpack_require__("31d0");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "c84b":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("694f");
var createDesc = __webpack_require__("b915");
module.exports = __webpack_require__("3a0f") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "caa4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("ae63");
var defined = __webpack_require__("2b11");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "cb43":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d4f6":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("4d65");
var aFunction = __webpack_require__("9102");
var SPECIES = __webpack_require__("f3ae")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "d62f":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("b429");
var setPrototypeOf = __webpack_require__("d772").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "d635":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("b429");
var cof = __webpack_require__("9b6d");
var MATCH = __webpack_require__("f3ae")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "d753":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("7cbd");
var enumBugKeys = __webpack_require__("2ba0");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "d772":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("b429");
var anObject = __webpack_require__("4d65");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("0709")(Function.call, __webpack_require__("78de").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "d819":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("38cc");
var document = __webpack_require__("a051").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "e2d3":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("471d");
var defined = __webpack_require__("04be");
var fails = __webpack_require__("7f67");
var spaces = __webpack_require__("4bcb");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "e67d":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "ea65":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__("d635");
var anObject = __webpack_require__("4d65");
var speciesConstructor = __webpack_require__("d4f6");
var advanceStringIndex = __webpack_require__("1ff3");
var toLength = __webpack_require__("33f2");
var callRegExpExec = __webpack_require__("b21e");
var regexpExec = __webpack_require__("31d0");
var fails = __webpack_require__("201d");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__("c5aa")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "eb10":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("38cc");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "ec18":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("69fd");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "ed52":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6dd6");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "f10e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("4d65");
var toLength = __webpack_require__("33f2");
var advanceStringIndex = __webpack_require__("1ff3");
var regExpExec = __webpack_require__("b21e");

// @@match logic
__webpack_require__("c5aa")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "f3ae":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("13c4")('wks');
var uid = __webpack_require__("75ff");
var Symbol = __webpack_require__("4839").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "f91a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("4d65");
var toObject = __webpack_require__("aa91");
var toLength = __webpack_require__("33f2");
var toInteger = __webpack_require__("ae63");
var advanceStringIndex = __webpack_require__("1ff3");
var regExpExec = __webpack_require__("b21e");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("c5aa")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "fdb5":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("ed52");
var defined = __webpack_require__("04be");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ })

/******/ });
});