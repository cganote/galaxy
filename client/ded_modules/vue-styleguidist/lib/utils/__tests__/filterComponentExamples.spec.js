'use strict';

var _deepfreeze = require('deepfreeze');

var _deepfreeze2 = _interopRequireDefault(_deepfreeze);

var _filterComponentExamples = require('../filterComponentExamples');

var _filterComponentExamples2 = _interopRequireDefault(_filterComponentExamples);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = (0, _deepfreeze2.default)({
	props: {
		examples: ['a', 'b', 'c', 'd']
	},
	other: 'info'
});

describe('filterComponentExamples', function () {
	it('should return a shallow copy of a component with example filtered by given index', function () {
		var result = (0, _filterComponentExamples2.default)(component, 2);
		expect(result).toEqual({
			props: {
				examples: ['c']
			},
			other: 'info'
		});
	});
});