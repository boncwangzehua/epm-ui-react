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

  var page = {
    title: "图表组件示例"
  };

  var IndexPage = function (_Component) {
    _inherits(IndexPage, _Component);

    function IndexPage(props) {
      _classCallCheck(this, IndexPage);

      var _this = _possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).call(this, props));

      _this.state = {
        barData: ""
      };
      _this.fetchBarData = _this.fetchBarData.bind(_this);
      return _this;
    }

    _createClass(IndexPage, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.fetchBarData("asdf");
      }
    }, {
      key: 'fetchBarData',
      value: function fetchBarData(args) {
        var _this2 = this;

        var formdata = new FormData();
        formdata.append('args', args);
        fetch("/demo/charts/bar", { method: 'POST', credentials: 'same-origin', body: formdata }).then(function (res) {
          return res.json();
        }).then(function (barData) {
          return _this2.setState({ barData: barData });
        }).catch(function (err) {
          return console.error(err.toString());
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _epmUi.Page,
          null,
          _react2.default.createElement(_epmUi.Divider, null),
          _react2.default.createElement(
            _epmUi.Tabs,
            null,
            _react2.default.createElement(
              _epmUi.Tab,
              { title: '\u6298\u7EBF\u56FE' },
              _react2.default.createElement(_epmUi.Line, { dataSource: this.state.barData })
            ),
            _react2.default.createElement(
              _epmUi.Tab,
              { title: '\u67F1\u72B6\u56FE' },
              _react2.default.createElement(_epmUi.Bar, { dataSource: this.state.barData })
            ),
            _react2.default.createElement(
              _epmUi.Tab,
              { title: '\u4EEA\u8868\u56FE' },
              _react2.default.createElement(_epmUi.Gauge, { dataSource: '/demo/charts/gauge' })
            ),
            _react2.default.createElement(
              _epmUi.Tab,
              { title: '\u6851\u57FA\u56FE' },
              _react2.default.createElement(_epmUi.Sankey, { dataSource: '/demo/charts/sankey' })
            )
          )
        );
      }
    }]);

    return IndexPage;
  }(_react.Component);

  IndexPage.epmUIPage = page;

  exports.default = IndexPage;
  exports.IndexPage = IndexPage;
});