'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ArgumentRenderer = require('./ArgumentRenderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = 'Foo';
var type = { name: 'Array' };
var description = 'Converts foo to bar';
var props = {
	classes: classes(_ArgumentRenderer.styles)
};

it('should render argument', function () {
	var actual = shallow(_react2.default.createElement(_ArgumentRenderer.ArgumentRenderer, _extends({}, props, { name: name, type: type, description: description })));

	expect(actual).toMatchSnapshot();
});

it('should render argument without type', function () {
	var actual = shallow(_react2.default.createElement(_ArgumentRenderer.ArgumentRenderer, _extends({}, props, { name: name, description: description })));

	expect(actual).toMatchSnapshot();
});

it('should render argument without description', function () {
	var actual = shallow(_react2.default.createElement(_ArgumentRenderer.ArgumentRenderer, _extends({}, props, { name: name, type: type })));

	expect(actual).toMatchSnapshot();
});

it('should render return value', function () {
	var actual = shallow(_react2.default.createElement(_ArgumentRenderer.ArgumentRenderer, _extends({}, props, { type: type, description: description, returns: true })));

	expect(actual).toMatchSnapshot();
});

it('should render with block styles', function () {
	var actual = shallow(_react2.default.createElement(_ArgumentRenderer.ArgumentRenderer, _extends({}, props, { block: true })));

	expect(actual).toMatchSnapshot();
});