'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NameRenderer = require('./NameRenderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
	classes: classes(_NameRenderer.styles)
};

it('renderer should render argument name', function () {
	var actual = shallow(_react2.default.createElement(
		_NameRenderer.NameRenderer,
		props,
		'Foo'
	));

	expect(actual).toMatchSnapshot();
});

it('renderer should render deprecated argument name', function () {
	var actual = shallow(_react2.default.createElement(
		_NameRenderer.NameRenderer,
		_extends({}, props, { deprecated: true }),
		'Foo'
	));

	expect(actual).toMatchSnapshot();
});