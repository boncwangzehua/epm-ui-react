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
    exports.Search = undefined;

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

    var Search = function (_Component) {
        _inherits(Search, _Component);

        function Search(props) {
            _classCallCheck(this, Search);

            var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

            _this.handleSearch = _this.handleSearch.bind(_this);
            _this.handleAdd = _this.handleAdd.bind(_this);
            _this.handleChange = _this.handleChange.bind(_this);
            _this.handlePageChange = _this.handlePageChange.bind(_this);
            _this.handleClose = _this.handleClose.bind(_this);
            _this.state = {
                total: props.total,
                pageIndex: 1,
                InputValue: "",
                formData: {
                    id: '',
                    name: '',
                    age: '',
                    job: '',
                    telephone: '',
                    address: ''
                },
                visible: false,
                requestPath: _epmUi.context.contextPath + '/tableData?index=1&size=5'
            };
            return _this;
        }

        _createClass(Search, [{
            key: 'fetchPageTotal',
            value: function fetchPageTotal() {
                var _this2 = this;

                fetch && fetch(_epmUi.context.contextPath + '/getTableRows', { credentials: 'same-origin' }).then(function (response) {
                    return response.json();
                }).then(function (data) {
                    _this2.setState({
                        total: data
                    });
                });
            }
        }, {
            key: 'handleSearch',
            value: function handleSearch() {
                var _this3 = this;

                console.log(_epmUi.context.contextPath + '/index');
                this.setState(function (previousState, currentProps) {
                    return { requestPath: _epmUi.context.contextPath + '/tableData?index=1&size=5&requestPath=' + _this3.state.InputValue };
                }, function () {
                    _this3.fetchPageTotal();
                });
            }
        }, {
            key: 'handleChange',
            value: function handleChange(value) {
                this.setState({
                    InputValue: value
                });
            }
        }, {
            key: 'handlePageChange',
            value: function handlePageChange(index, size) {
                this.setState({
                    pageIndex: index,
                    requestPath: _epmUi.context.contextPath + '/tableData?index=' + index + '&size=' + size + '&requestPath=' + this.state.InputValue
                });
            }
        }, {
            key: 'handleUpdate',
            value: function handleUpdate(value) {
                this.setState({
                    visible: !this.state.visible,
                    formData: {
                        id: value.id,
                        name: value.name,
                        age: value.age,
                        job: value.job,
                        telephone: value.telephone,
                        address: value.address
                    }
                });
            }
        }, {
            key: 'handleDelete',
            value: function handleDelete(id, name) {
                if (confirm("确定要删除" + name + "吗")) {
                    this.setState({
                        requestPath: _epmUi.context.contextPath + '/tableData?index=' + this.state.pageIndex + '&size=5&requestPath=' + this.state.InputValue + '&id=' + id
                    });
                }
            }
        }, {
            key: 'handleAdd',
            value: function handleAdd() {
                this.setState({
                    formData: {
                        name: '',
                        age: '',
                        job: '',
                        telephone: '',
                        address: ''
                    },
                    visible: !this.state.visible
                });
            }
        }, {
            key: 'handleClose',
            value: function handleClose() {
                console.log(this.state.visible);
                this.setState({
                    visible: !this.state.visible
                });
            }
        }, {
            key: 'render',
            value: function render() {
                var _this4 = this;

                return _react2.default.createElement(
                    _epmUi.Page,
                    null,
                    _react2.default.createElement(
                        _epmUi.Container,
                        { type: 'fixed' },
                        _react2.default.createElement(_epmUi.Divider, null),
                        _react2.default.createElement(
                            _epmUi.Row,
                            null,
                            _react2.default.createElement(
                                _epmUi.Col,
                                { size: 10 },
                                _react2.default.createElement(
                                    _epmUi.Label,
                                    null,
                                    '\u641C\u7D22\u6846'
                                ),
                                _react2.default.createElement(_epmUi.Input, { placeholder: '\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9', type: 'search', name: 'search', onChange: this.handleChange }),
                                _react2.default.createElement(
                                    _epmUi.Button,
                                    { type: 'default', onClick: this.handleSearch },
                                    '\u641C\u7D22'
                                ),
                                _react2.default.createElement(
                                    _epmUi.Button,
                                    { type: 'default', onClick: this.handleAdd },
                                    '\u589E\u52A0'
                                )
                            )
                        ),
                        _react2.default.createElement(_epmUi.Divider, null),
                        _react2.default.createElement(
                            _epmUi.Modal,
                            { visible: this.state.visible, onClose: this.handleClose },
                            _react2.default.createElement(
                                _epmUi.ModalBody,
                                null,
                                _react2.default.createElement(
                                    _epmUi.Form,
                                    { method: 'post', action: _epmUi.context.contextPath + '/submitData' },
                                    _react2.default.createElement(
                                        _epmUi.FormItem,
                                        null,
                                        _react2.default.createElement(_epmUi.Input, { type: 'text', name: 'id', value: this.state.formData.id })
                                    ),
                                    _react2.default.createElement(
                                        _epmUi.FormItem,
                                        null,
                                        _react2.default.createElement(
                                            _epmUi.Label,
                                            null,
                                            '\u59D3\u540D'
                                        ),
                                        _react2.default.createElement(_epmUi.Input, { type: 'text', name: 'name', value: this.state.formData.name })
                                    ),
                                    _react2.default.createElement(
                                        _epmUi.FormItem,
                                        null,
                                        _react2.default.createElement(
                                            _epmUi.Label,
                                            null,
                                            '\u5E74\u9F84'
                                        ),
                                        _react2.default.createElement(_epmUi.Input, { type: 'text', name: 'age', value: this.state.formData.age })
                                    ),
                                    _react2.default.createElement(
                                        _epmUi.FormItem,
                                        null,
                                        _react2.default.createElement(
                                            _epmUi.Label,
                                            null,
                                            '\u5DE5\u4F5C'
                                        ),
                                        _react2.default.createElement(_epmUi.Input, { type: 'text', name: 'job', value: this.state.formData.job })
                                    ),
                                    _react2.default.createElement(
                                        _epmUi.FormItem,
                                        null,
                                        _react2.default.createElement(
                                            _epmUi.Label,
                                            null,
                                            '\u7535\u8BDD'
                                        ),
                                        _react2.default.createElement(_epmUi.Input, { type: 'text', name: 'telephone', value: this.state.formData.telephone })
                                    ),
                                    _react2.default.createElement(
                                        _epmUi.FormItem,
                                        null,
                                        _react2.default.createElement(
                                            _epmUi.Label,
                                            null,
                                            '\u5730\u5740'
                                        ),
                                        _react2.default.createElement(_epmUi.Input, { type: 'text', name: 'address', value: this.state.formData.address })
                                    ),
                                    _react2.default.createElement(
                                        _epmUi.Button,
                                        { type: 'primary', htmlType: 'submit', onClick: this.handleClose },
                                        '\u63D0\u4EA4'
                                    ),
                                    _react2.default.createElement(
                                        _epmUi.Button,
                                        { type: 'default', onClick: this.handleClose },
                                        '\u53D6\u6D88'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _epmUi.Row,
                            null,
                            _react2.default.createElement(
                                _epmUi.Col,
                                { size: 10 },
                                _react2.default.createElement(
                                    _epmUi.Table,
                                    { dataSource: this.state.requestPath, fixed: true },
                                    _react2.default.createElement(_epmUi.Column, { title: '\u59D3\u540D', dataIndex: 'name' }),
                                    _react2.default.createElement(_epmUi.Column, { title: '\u5E74\u9F84', dataIndex: 'age' }),
                                    _react2.default.createElement(_epmUi.Column, { title: '\u5DE5\u4F5C', dataIndex: 'job' }),
                                    _react2.default.createElement(_epmUi.Column, { title: '\u7535\u8BDD', dataIndex: 'telephone' }),
                                    _react2.default.createElement(_epmUi.Column, { title: '\u5730\u5740', dataIndex: 'address' }),
                                    _react2.default.createElement(
                                        _epmUi.Column,
                                        { title: '\u64CD\u4F5C' },
                                        function (value) {
                                            return _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(
                                                    _epmUi.Button,
                                                    { type: 'primary', onClick: _this4.handleUpdate.bind(_this4, value) },
                                                    '\u4FEE\u6539'
                                                ),
                                                _react2.default.createElement(
                                                    _epmUi.Button,
                                                    { type: 'danger', onClick: _this4.handleDelete.bind(_this4, value.id, value.name) },
                                                    '\u5220\u9664'
                                                )
                                            );
                                        }
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(_epmUi.Divider, null),
                        _react2.default.createElement(
                            _epmUi.Row,
                            null,
                            _react2.default.createElement(_epmUi.Col, { size: 4 }),
                            _react2.default.createElement(
                                _epmUi.Col,
                                { size: 8 },
                                _react2.default.createElement(_epmUi.Pagination, { index: this.state.pageIndex, total: this.state.total, pages: 5, size: 5, onChange: this.handlePageChange })
                            )
                        )
                    )
                );
            }
        }]);

        return Search;
    }(_react.Component);

    exports.default = Search;
    exports.Search = Search;
});