'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LinkRenderer = require('./LinkRenderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var href = '/foo';
var children = 'Foo';

it('renderer should render link', function () {
	var actual = shallow(_react2.default.createElement(
		_LinkRenderer.LinkRenderer,
		{ href: href, classes: {} },
		children
	));

	expect(actual).toMatchSnapshot();
});

it('should compose passed class names', function () {
	var actual = shallow(_react2.default.createElement(
		_LinkRenderer.LinkRenderer,
		{ classes: { link: 'baseLinkClass' }, href: href, className: 'customClass' },
		children
	));

	expect(actual.find('a').prop('className')).toBe('baseLinkClass customClass');
});