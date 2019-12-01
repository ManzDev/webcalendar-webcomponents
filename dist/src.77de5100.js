// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"components/CalendarDay.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarDay = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DAYS_OF_WEEK = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

var CalendarDay =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(CalendarDay, _HTMLElement);

  function CalendarDay() {
    var _this;

    _classCallCheck(this, CalendarDay);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CalendarDay).call(this));
    _this.day = Number(_this.getAttribute('day')) || 1;
    _this.dow = Number(_this.getAttribute('dow')) || 0; // American format

    return _this;
  }

  _createClass(CalendarDay, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      this.innerHTML = "\n      <style>\n        .day {\n          display: inline-flex;\n          flex-direction: column;\n          align-items: center;\n          justify-content: center;\n          border: 0;\n          width: 75px;\n          height: 100px;\n          background: white;\n          border-bottom: 5px solid white;\n          margin-bottom: 5px;\n          cursor: pointer;\n          user-select: none;\n        }\n        .holiday {\n          border-bottom-color: red;\n        }\n        .today {\n          background: indigo;\n          color: white;\n          border-bottom-color: slateblue;\n        }\n        .mark {\n          filter: invert(1);\n        }\n        .day h4 {\n          margin: 0;\n          font-size: 42px;\n        }\n        .day span {\n          color: #888;\n        }\n      </style>\n      <div class=\"day ".concat(this.getTypeDay(this.dow), " ").concat(this.todayClass(), "\">\n        <h4>").concat(this.day, "</h4>\n        <span>").concat(DAYS_OF_WEEK[this.dow], "</span>\n      </div>\n    "); // Handlers

      this.querySelector('.day').addEventListener('click', function () {
        return _this2.onClick();
      });
    }
  }, {
    key: "onClick",
    value: function onClick() {
      this.classList.toggle('mark');
    }
  }, {
    key: "isWorkDay",
    value: function isWorkDay(day) {
      return day > 0 && day < 6;
    }
  }, {
    key: "getTypeDay",
    value: function getTypeDay(day) {
      return this.isWorkDay(day) ? 'workday' : 'holiday';
    }
  }, {
    key: "isToday",
    value: function isToday() {
      return this.hasAttribute('today');
    }
  }, {
    key: "todayClass",
    value: function todayClass() {
      return this.isToday() ? 'today' : '';
    }
  }]);

  return CalendarDay;
}(_wrapNativeSuper(HTMLElement)); // customElements.define('calendar-day', CalendarDay);


exports.CalendarDay = CalendarDay;
},{}],"components/CalendarMonth.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarMonth = void 0;

require("./CalendarDay.ts");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MONTH_NAME = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

var paddingDays = function paddingDays(day) {
  return day === 0 ? 6 : day - 1;
};

var CalendarMonth =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(CalendarMonth, _HTMLElement);

  function CalendarMonth() {
    var _this;

    _classCallCheck(this, CalendarMonth);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CalendarMonth).call(this));
    _this.today = new Date();
    _this.month = Number(_this.getAttribute('month')) || _this.today.getMonth() + 1;
    _this.year = Number(_this.getAttribute('year')) || _this.today.getFullYear();
    _this.maxDay = new Date(_this.year, _this.month, 0).getDate();
    return _this;
  }

  _createClass(CalendarMonth, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n      <style>\n        .month {\n          width: 550px;\n        }\n        .days {\n          display: grid;\n          grid-template-columns: repeat(7, 1fr);\n          grid-template-rows: repeat(6, 1fr);\n        }\n        .block {\n          display: inline-flex;\n          width: 75px;\n          height: 100px;\n          border-bottom: 5px;\n          margin-bottom: 5px;\n          visibility: hidden;\n        }\n        header {\n          background: steelblue;\n          color: white;\n          font-weight: bold;\n          font-size: 40px;\n          text-align: center;\n          padding: 10px 0;\n          margin-bottom: 5px;\n        }\n      </style>\n      <div class=\"month\">\n        <header>\uD83D\uDCC5 ".concat(MONTH_NAME[this.month - 1], "</header>\n        <div class=\"days\">\n          ").concat(this.getDays(), "\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "isToday",
    value: function isToday(day, month) {
      return day == this.today.getDate() && month == this.today.getMonth() + 1;
    }
  }, {
    key: "isTodayProp",
    value: function isTodayProp(day) {
      return this.isToday(day, this.month) ? 'today' : '';
    }
  }, {
    key: "getDays",
    value: function getDays() {
      // padding days
      var firstDOW = new Date(this.year, this.month - 1, 1).getDay();
      var pad = paddingDays(firstDOW);
      var days = [];

      for (var i = 0; i < pad; i++) {
        days.push('<div class="block"></div>');
      } // month days


      for (var _i = 1; _i <= this.maxDay; _i++) {
        var weekday = (firstDOW + (_i - 1)) % 7;
        days.push("<calendar-day day=\"".concat(_i, "\" dow=\"").concat(weekday, "\" ").concat(this.isTodayProp(_i), "></calendar-day>"));
      }

      return days.join('');
    }
  }]);

  return CalendarMonth;
}(_wrapNativeSuper(HTMLElement)); // customElements.define('calendar-month', CalendarMonth);


exports.CalendarMonth = CalendarMonth;
},{"./CalendarDay.ts":"components/CalendarDay.ts"}],"components/CalendarYear.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarYear = void 0;

require("./CalendarMonth.ts");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CalendarYear =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(CalendarYear, _HTMLElement);

  function CalendarYear() {
    var _this;

    _classCallCheck(this, CalendarYear);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CalendarYear).call(this));
    var date = new Date();
    _this.year = Number(_this.getAttribute('year')) || date.getFullYear();
    return _this;
  }

  _createClass(CalendarYear, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      this.innerHTML = "\n      <style>\n        .months {\n          display: grid;\n          grid-template-columns: repeat(3, 1fr);\n          grid-template-rows: repeat(4, 1fr);\n          justify-items: center;\n        }\n        @media screen and (max-width: 1750px) {\n          .months {\n            grid-template-columns: repeat(2, 1fr);\n            grid-template-rows: repeat(6, 1fr);\n          }\n        }\n        @media screen and (max-width: 1200px) {\n          .months {\n            grid-template-columns: repeat(12, 1fr);\n            grid-template-columns: 1fr;\n          }\n        }\n        .year > header {\n          margin-bottom: 5px;\n        }\n        .prev, .next {\n          background: transparent;\n          border: 0;\n          font-size: 18px;\n          color: gold;\n          cursor: pointer;\n        }\n      </style>\n      <div class=\"year\">\n        <header>\n          <button class=\"prev\">Prev</button>\n          ".concat(this.year, "\n          <button class=\"next\">Next</button>\n        </header>\n        <div class=\"months\">\n          ").concat(this.getMonths(), "\n        </div>\n      </div>\n    ");
      this.querySelector('.prev').addEventListener('click', function () {
        return _this2.setNewYear(_this2.year - 1);
      });
      this.querySelector('.next').addEventListener('click', function () {
        return _this2.setNewYear(_this2.year + 1);
      });
    }
  }, {
    key: "setNewYear",
    value: function setNewYear(year) {
      var parent = this.parentElement;
      var element = document.createElement('calendar-year');
      element.setAttribute('year', year.toString());
      this.remove();
      parent.append(element);
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'year') {
        this.year = Number(newValue);
      }
    }
  }, {
    key: "getMonths",
    value: function getMonths() {
      var months = [];

      for (var i = 1; i <= 12; i++) {
        months.push("<calendar-month month=\"".concat(i, "\" year=\"").concat(this.year, "\"></calendar-month>"));
      }

      return months.join('');
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['year'];
    }
  }, {
    key: "year",
    set: function set(y) {
      this.year = y;
    },
    get: function get() {
      return this.year;
    }
  }]);

  return CalendarYear;
}(_wrapNativeSuper(HTMLElement)); // customElements.define('calendar-year', CalendarYear);


exports.CalendarYear = CalendarYear;
},{"./CalendarMonth.ts":"components/CalendarMonth.ts"}],"index.ts":[function(require,module,exports) {
"use strict";

var _CalendarDay = require("./components/CalendarDay");

var _CalendarMonth = require("./components/CalendarMonth");

var _CalendarYear = require("./components/CalendarYear");

// import './components/CalendarYear.js';
customElements.define('calendar-day', _CalendarDay.CalendarDay);
customElements.define('calendar-month', _CalendarMonth.CalendarMonth);
customElements.define('calendar-year', _CalendarYear.CalendarYear);
},{"./components/CalendarDay":"components/CalendarDay.ts","./components/CalendarMonth":"components/CalendarMonth.ts","./components/CalendarYear":"components/CalendarYear.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "3403" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/src.77de5100.js.map