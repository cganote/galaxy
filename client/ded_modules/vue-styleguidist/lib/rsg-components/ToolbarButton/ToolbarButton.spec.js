'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ToolbarButtonRenderer = require('./ToolbarButtonRenderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
	classes: classes(_ToolbarButtonRenderer.styles),
	title: 'Pizza button'
};

it('should render a button', function () {
	var actual = shallow(_react2.default.createElement(
		_ToolbarButtonRenderer.ToolbarButtonRenderer,
		_extends({}, props, { onClick: function onClick() {} }),
		'pizza'
	));

	expect(actual).toMatchSnapshot();
});

it('should render a link', function () {
	var actual = shallow(_react2.default.createElement(
		_ToolbarButtonRenderer.ToolbarButtonRenderer,
		_extends({}, props, { href: '/foo' }),
		'pizza'
	));

	expect(actual).toMatchSnapshot();
});

it('should pass a class name to a button', function () {
	var actual = shallow(_react2.default.createElement(
		_ToolbarButtonRenderer.ToolbarButtonRenderer,
		_extends({}, props, { onClick: function onClick() {}, className: 'foo-class' }),
		'pizza'
	));

	expect(actual.prop('className')).toBe('button foo-class');
});

it('should pass a class name to a link', function () {
	var actual = shallow(_react2.default.createElement(
		_ToolbarButtonRenderer.ToolbarButtonRenderer,
		_extends({}, props, { href: '/foo', className: 'foo-class' }),
		'pizza'
	));

	expect(actual.prop('className')).toBe('button foo-class');
});

it('should render a button with small styles', function () {
	var actual = shallow(_react2.default.createElement(
		_ToolbarButtonRenderer.ToolbarButtonRenderer,
		_extends({}, props, { onClick: function onClick() {}, small: true }),
		'butterbrot'
	));

	expect(actual.prop('className')).toBe('button isSmall');
});