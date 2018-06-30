'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ErrorRenderer = require('./ErrorRenderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renderer should render error message', function () {
	var error = { toString: function toString() {
			return 'error';
		} };
	var info = { componentStack: { toString: function toString() {
				return 'info';
			} } };
	var actual = shallow(_react2.default.createElement(_ErrorRenderer.ErrorRenderer, { classes: {}, error: error, info: info }));

	expect(actual).toMatchSnapshot();
});