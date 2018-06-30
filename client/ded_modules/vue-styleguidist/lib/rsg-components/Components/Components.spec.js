'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ReactComponent = require('../ReactComponent');

var _ReactComponent2 = _interopRequireDefault(_ReactComponent);

var _Components = require('./Components');

var _Components2 = _interopRequireDefault(_Components);

var _ComponentsRenderer = require('./ComponentsRenderer');

var _ComponentsRenderer2 = _interopRequireDefault(_ComponentsRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = [{
	name: 'Foo',
	pathLine: 'components/foo.js',
	filepath: 'components/foo.js',
	props: {
		description: 'Foo foo'
	}
}, {
	name: 'Bar',
	pathLine: 'components/bar.js',
	filepath: 'components/bar.js',
	props: {
		description: 'Bar bar'
	}
}];

it('should render components list', function () {
	var actual = shallow(_react2.default.createElement(_Components2.default, { components: components, depth: 3 }));

	expect(actual).toMatchSnapshot();
});

it('renderer should render components list layout', function () {
	var actual = shallow(_react2.default.createElement(
		_ComponentsRenderer2.default,
		null,
		_react2.default.createElement(_ReactComponent2.default, { key: 0, component: components[0], depth: 3 }),
		_react2.default.createElement(_ReactComponent2.default, { key: 1, component: components[1], depth: 3 })
	));

	expect(actual).toMatchSnapshot();
});