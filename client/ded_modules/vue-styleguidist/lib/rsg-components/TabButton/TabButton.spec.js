'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TabButtonRenderer = require('./TabButtonRenderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
	classes: classes(_TabButtonRenderer.styles),
	onClick: function onClick() {}
};

it('should render a button', function () {
	var actual = shallow(_react2.default.createElement(
		_TabButtonRenderer.TabButtonRenderer,
		props,
		'pizza'
	));

	expect(actual).toMatchSnapshot();
});

it('should render active styles', function () {
	var actual = shallow(_react2.default.createElement(
		_TabButtonRenderer.TabButtonRenderer,
		_extends({}, props, { active: true }),
		'pizza'
	));

	expect(actual).toMatchSnapshot();
});

it('should pass a class name to a button', function () {
	var actual = shallow(_react2.default.createElement(
		_TabButtonRenderer.TabButtonRenderer,
		_extends({}, props, { onClick: function onClick() {}, className: 'foo-class' }),
		'pizza'
	));

	expect(actual).toMatchSnapshot();
});