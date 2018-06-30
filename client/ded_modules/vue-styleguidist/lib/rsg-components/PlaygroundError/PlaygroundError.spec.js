'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PlaygroundErrorRenderer = require('./PlaygroundErrorRenderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renderer should render message', function () {
	var message = 'Hello *world*!';
	var actual = shallow(_react2.default.createElement(_PlaygroundErrorRenderer.PlaygroundErrorRenderer, { classes: {}, message: message }));

	expect(actual).toMatchSnapshot();
});