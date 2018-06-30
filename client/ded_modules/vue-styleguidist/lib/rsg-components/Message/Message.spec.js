'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MessageRenderer = require('./MessageRenderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renderer should render message', function () {
	var message = 'Hello *world*!';
	var actual = shallow(_react2.default.createElement(
		_MessageRenderer.MessageRenderer,
		{ classes: {} },
		message
	));

	expect(actual).toMatchSnapshot();
});

it('renderer should render message for array', function () {
	var messages = ['Hello *world*!', 'Foo _bar_'];
	var actual = shallow(_react2.default.createElement(
		_MessageRenderer.MessageRenderer,
		{ classes: {} },
		messages
	));

	expect(actual).toMatchSnapshot();
});