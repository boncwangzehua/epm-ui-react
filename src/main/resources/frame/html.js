/*!
 * epm-ui-simple-spring-boot - EPM UI Spring Boot Simple
 * @version v0.2.0
 * @link http://www.bonc.com.cn
 * Copyright (C) 2017 BONC All rights reserved.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["EPMUIApp"] = factory(require("react"));
	else
		root["EPMUIApp"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {"development":{"css":["/bower_components/epm-ui-css/dist/css/epm-ui.css"],"js":["/bower_components/react/react.js","/bower_components/react/react-dom.js","/bower_components/epm-ui/dist/umd/epm-ui.bundle.js","/components/components.js"]},"test":{"css":["/bower_components/epm-ui-css/dist/css/epm-ui.min.css"],"js":["/bower_components/react/react.min.js","/bower_components/react/react-dom.min.js","/bower_components/epm-ui/dist/umd/epm-ui.bundle.min.js","/components/components.min.js"]},"production":{"css":["/bower_components/epm-ui-css/dist/css/epm-ui.min.css"],"js":["/bower_components/react/react.min.js","/bower_components/react/react-dom.min.js","/bower_components/epm-ui/dist/umd/epm-ui.bundle.min.js","/components/components.min.js"]}}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var DefaultLayout = function (_Component) {
  _inherits(DefaultLayout, _Component);

  function DefaultLayout() {
    _classCallCheck(this, DefaultLayout);

    return _possibleConstructorReturn(this, (DefaultLayout.__proto__ || Object.getPrototypeOf(DefaultLayout)).apply(this, arguments));
  }

  _createClass(DefaultLayout, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: this.props.id },
        this.props.children
      );
    }
  }]);

  return DefaultLayout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

DefaultLayout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node
};

/* harmony default export */ __webpack_exports__["a"] = (DefaultLayout);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_default__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_resources_json__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_resources_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__config_resources_json__);





var PAGE_ROOT = 'epm-ui-page-root';

var initScriptTmpl = function initScriptTmpl(ctx, props) {
  return ('\n  if ( window.EPMUI && window.EPMUIPage ) {\n    EPMUI.context = ' + ctx + ';\n    var container = document.getElementById( "' + PAGE_ROOT + '" );\n    var Page = EPMUIPage.default || EPMUIPage;\n    ReactDOM.render(\n      React.createElement( Page, ' + props + ' ),\n      container\n    );\n  }\n').trim();
};

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var res = __WEBPACK_IMPORTED_MODULE_2__config_resources_json___default.a[props.env] || {};

  var context = props.context;
  var contextPath = context.contextPath;

  var page = props.component.epmUIPage || {};

  var initScript = initScriptTmpl(JSON.stringify(context), props.data);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'html',
    { lang: 'zh-cn' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'head',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'utf-8' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge, chrome=1' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'title',
        null,
        page.title || 'EPM UI Page title'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'shortcut icon', href: contextPath + '/icons/favicon.ico' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'apple-touch-icon', sizes: '57x57', href: contextPath + '/icons/apple-icon-57x57.png' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'apple-touch-icon', sizes: '60x60', href: contextPath + '/icons/apple-icon-60x60.png' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'apple-touch-icon', sizes: '72x72', href: contextPath + '/icons/apple-icon-72x72.png' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'apple-touch-icon', sizes: '76x76', href: contextPath + '/icons/apple-icon-76x76.png' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'apple-touch-icon', sizes: '114x114', href: contextPath + '/icons/apple-icon-114x114.png' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'apple-touch-icon', sizes: '120x120', href: contextPath + '/icons/apple-icon-120x120.png' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'apple-touch-icon', sizes: '144x144', href: contextPath + '/icons/apple-icon-144x144.png' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'apple-touch-icon', sizes: '152x152', href: contextPath + '/icons/apple-icon-152x152.png' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'apple-touch-icon', sizes: '180x180', href: contextPath + '/icons/apple-icon-180x180.png' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: contextPath + '/icons/android-icon-192x192.png' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: contextPath + '/icons/favicon-32x32.png' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: contextPath + '/icons/favicon-96x96.png' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: contextPath + '/icons/favicon-16x16.png' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'manifest', href: contextPath + '/icons/manifest.json' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'msapplication-TileColor', content: '#FFFFFF' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'msapplication-TileImage', content: contextPath + '/icons/ms-icon-144x144.png' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'theme-color', content: '#FFFFFF' }),
      res.css && res.css.map(function (css, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { key: index, rel: 'stylesheet', href: contextPath + css });
      }),
      page.css && page.css.map(function (css, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { key: index, rel: 'stylesheet', href: contextPath + css });
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'body',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__layouts_default__["a" /* default */],
        { id: PAGE_ROOT, contextPath: contextPath },
        props.children
      ),
      res.js && res.js.map(function (js, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { key: index, src: contextPath + js });
      }),
      page.js && page.js.map(function (js, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { key: index, src: contextPath + js });
      }),
      props.view ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: contextPath + '/views/' + props.view + '.' + (props.env === 'development' ? 'js' : 'min.js') }) : null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { dangerouslySetInnerHTML: { __html: initScript } })
    )
  );
});

/***/ })
/******/ ]);
});