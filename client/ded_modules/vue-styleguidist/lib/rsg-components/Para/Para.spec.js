'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ParaRenderer = require('./ParaRenderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
	classes: classes(_ParaRenderer.styles)
};

it('should render paragraph as a <div>', function () {
	var actual = shallow(_react2.default.createElement(
		_ParaRenderer.ParaRenderer,
		props,
		'Pizza'
	));

	expect(actual).toMatchSnapshot();
});

it('should render paragraph as a <p>', function () {
	var actual = shallow(_react2.default.createElement(
		_ParaRenderer.ParaRenderer,
		_extends({}, props, { semantic: 'p' }),
		'Pizza'
	));

	expect(actual).toMatchSnapshot();
});