'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ArgumentsRenderer = require('./ArgumentsRenderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
	classes: classes(_ArgumentsRenderer.styles)
};

var args = [{
	name: 'Foo',
	description: 'Converts foo to bar',
	type: { name: 'Array' }
}, {
	name: 'Foo'
}];

it('renderer should render arguments', function () {
	var actual = shallow(_react2.default.createElement(_ArgumentsRenderer.ArgumentsRenderer, _extends({}, props, { args: args })));

	expect(actual).toMatchSnapshot();
});

it('renderer should render heading', function () {
	var actual = shallow(_react2.default.createElement(_ArgumentsRenderer.ArgumentsRenderer, _extends({}, props, { args: [args[1]], heading: true })));

	expect(actual).toMatchSnapshot();
});

it('renderer should render nothing for empty array', function () {
	var actual = shallow(_react2.default.createElement(_ArgumentsRenderer.ArgumentsRenderer, _extends({}, props, { args: [] })));

	expect(actual.getElement()).toBe(null);
});