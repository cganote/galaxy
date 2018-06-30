'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Usage = require('./Usage');

var _Usage2 = _interopRequireDefault(_Usage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = [{
	name: 'children',
	type: { name: 'string' },
	required: true,
	description: 'Button label.'
}];
var methods = [{
	name: 'set',
	params: [{
		name: 'newValue',
		description: 'New value for the counter.',
		type: { name: 'Number' }
	}],
	returns: null,
	description: 'Sets the counter to a particular value.'
}];

describe('Usage', function () {
	it('should render props table', function () {
		var actual = shallow(_react2.default.createElement(_Usage2.default, { props: { props: props } }));

		expect(actual).toMatchSnapshot();
	});

	it('should render methods table', function () {
		var actual = shallow(_react2.default.createElement(_Usage2.default, { props: { methods: methods } }));

		expect(actual).toMatchSnapshot();
	});

	it('should render nothing without props and methods', function () {
		var actual = shallow(_react2.default.createElement(_Usage2.default, { props: {} }));

		expect(actual.getElement()).toBe(null);
	});
});