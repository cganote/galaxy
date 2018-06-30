'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TypeRenderer = require('./TypeRenderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
	classes: classes(_TypeRenderer.styles)
};

it('renderer should render type', function () {
	var actual = shallow(_react2.default.createElement(
		_TypeRenderer.TypeRenderer,
		props,
		'Array'
	));

	expect(actual).toMatchSnapshot();
});