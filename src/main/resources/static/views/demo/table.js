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
  exports.IndexPage = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var IndexPage = function (_Component) {
    _inherits(IndexPage, _Component);

    function IndexPage() {
      _classCallCheck(this, IndexPage);

      return _possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).apply(this, arguments));
    }

    _createClass(IndexPage, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _epmUi.Page,
          null,
          _react2.default.createElement(_epmUi.Divider, null),
          _react2.default.createElement(
            _epmUi.Table,
            { dataSource: _epmUi.context.contextPath + '/demo/table/table', multiLine: true, striped: true },
            _react2.default.createElement(
              _epmUi.Column,
              { title: '\u8857\u9053', dataIndex: 'street' },
              function (value) {
                return _react2.default.createElement(
                  'a',
                  null,
                  value
                );
              }
            ),
            _react2.default.createElement(_epmUi.Column, { title: '\u5730\u5740', dataIndex: 'village' }),
            _react2.default.createElement(
              _epmUi.Column,
              { title: '\u5355\u5143', dataIndex: 'unit' },
              function (value) {
                return _react2.default.createElement(
                  _epmUi.Button,
                  null,
                  ' vlaue '
                );
              }
            ),
            _react2.default.createElement(
              _epmUi.Column,
              { title: '\u590D\u9009\u6846', dataIndex: 'boolean' },
              function (value) {
                return _react2.default.createElement(
                  _epmUi.Select,
                  { placeholder: 'Please select' },
                  _react2.default.createElement(
                    _epmUi.Option,
                    { value: '1' },
                    'Options 1 '
                  ),
                  _react2.default.createElement(
                    _epmUi.Option,
                    { value: '2' },
                    'Options 2 '
                  ),
                  _react2.default.createElement(
                    _epmUi.Option,
                    { value: '3' },
                    'Options 3 '
                  ),
                  _react2.default.createElement(
                    _epmUi.Option,
                    { value: '4' },
                    'Options 4 '
                  ),
                  _react2.default.createElement(
                    _epmUi.Option,
                    { value: '5' },
                    'Options 5 '
                  )
                );
              }
            )
          )
        );
      }
    }]);

    return IndexPage;
  }(_react.Component);

  IndexPage.epmUIPage = {
    title: "EPM UI"
  };

  exports.default = IndexPage;
  exports.IndexPage = IndexPage;
});