'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _WelcomeRenderer = require('./WelcomeRenderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renderer should render welcome screen', function () {
	var actual = shallow(_react2.default.createElement(_WelcomeRenderer.WelcomeRenderer, { classes: {}, patterns: ['foo/*.js', 'bar/*.js'] }));

	expect(actual).toMatchSnapshot();
});