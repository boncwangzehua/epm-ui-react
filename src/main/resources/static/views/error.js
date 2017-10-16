/*!
 * epm-ui-simple-spring-boot - EPM UI Spring Boot Simple
 * @version v0.2.0
 * @link http://www.bonc.com.cn
 * Copyright (C) 2017 BONC All rights reserved.
 */
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('EPMUIPage', ['exports', 'react', 'epm-ui'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('epm-ui'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.React, global.EPMUI);
    global.EPMUIPage = mod.exports;
  }
})(this, function (exports, _react, _epmUi) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ErrorPage = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var page = {
    title: "Error page"
  };

  var ErrorBody = function ErrorBody(props) {
    var status = props.status,
        stack = props.stack,
        message = props.message,
        info = props.info;


    if (info) {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          info.heading
        ),
        _react2.default.createElement(
          'p',
          null,
          info.summary
        ),
        _react2.default.createElement(
          'ul',
          null,
          info.suggestions.map(function (suggestion, index) {
            return _react2.default.createElement(
              'li',
              { key: index },
              suggestion
            );
          })
        )
      );
    } else {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'HTTP Status ',
          status
        ),
        _react2.default.createElement(
          'h2',
          null,
          message
        ),
        _react2.default.createElement(
          'pre',
          null,
          stack
        ),
        _react2.default.createElement(
          'div',
          null,
          '404error.'
        )
      );
    }
  };

  var ErrorPage = function ErrorPage(props) {
    return _react2.default.createElement(
      _epmUi.Page,
      null,
      _react2.default.createElement(ErrorBody, props)
    );
  };

  ErrorPage.epmUIPage = page;

  exports.default = ErrorPage;
  exports.ErrorPage = ErrorPage;
});