'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _UsageTabButton = require('./UsageTabButton');

var _UsageTabButton2 = _interopRequireDefault(_UsageTabButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
	name: 'Pizza',
	onClick: function onClick() {}
};

it('should renderer a button', function () {
	var actual = shallow(_react2.default.createElement(_UsageTabButton2.default, _extends({}, props, { props: { props: [{ name: 'foo' }] } })));

	expect(actual).toMatchSnapshot();
});

it('should renderer null if there are not props or methods', function () {
	var actual = shallow(_react2.default.createElement(_UsageTabButton2.default, _extends({}, props, { props: {} })));

	expect(actual.getElement()).toBeFalsy();
});