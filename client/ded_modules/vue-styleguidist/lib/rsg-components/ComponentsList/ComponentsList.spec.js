'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComponentsList = require('./ComponentsList');

var _ComponentsList2 = _interopRequireDefault(_ComponentsList);

var _ComponentsListRenderer = require('./ComponentsListRenderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('should set the correct href for items', function () {
	var components = [{
		name: 'Button',
		slug: 'button'
	}, {
		name: 'Input',
		slug: 'input'
	}];

	var actual = shallow(_react2.default.createElement(_ComponentsList2.default, { items: components, classes: {} }));
	expect(actual).toMatchSnapshot();
});

it('should set the correct href for items when isolated links should be used', function () {
	var components = [{
		name: 'Button',
		slug: 'button'
	}, {
		name: 'Input',
		slug: 'input'
	}];

	var actual = shallow(_react2.default.createElement(_ComponentsList2.default, { items: components, classes: {}, useIsolatedLinks: true }));
	expect(actual).toMatchSnapshot();
});

it('should render sections with nested components', function () {
	var components = [{
		name: 'Button',
		slug: 'button',
		href: '#button'
	}, {
		name: 'Input',
		slug: 'input',
		href: '#input'
	}];
	var actual = shallow(_react2.default.createElement(_ComponentsListRenderer.ComponentsListRenderer, { items: components, classes: {} }));

	expect(actual).toMatchSnapshot();
});

it('should return null when the list is empty', function () {
	var actual = shallow(_react2.default.createElement(_ComponentsListRenderer.ComponentsListRenderer, { items: [], classes: {} }));

	expect(actual.getElement()).toBe(null);
});

it('should ignore items without name', function () {
	var components = [{
		name: 'Button',
		slug: 'button',
		href: '#button'
	}, {
		slug: 'input',
		href: '#input'
	}];
	var actual = shallow(_react2.default.createElement(_ComponentsListRenderer.ComponentsListRenderer, { items: components, classes: {} }));

	expect(actual).toMatchSnapshot();
});