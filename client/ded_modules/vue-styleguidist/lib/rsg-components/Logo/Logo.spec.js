'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LogoRenderer = require('./LogoRenderer');

var _LogoRenderer2 = _interopRequireDefault(_LogoRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renderer should render header', function () {
	var actual = render(_react2.default.createElement(
		_LogoRenderer2.default,
		null,
		'React Styleguidist'
	));

	expect(actual).toMatchSnapshot();
});