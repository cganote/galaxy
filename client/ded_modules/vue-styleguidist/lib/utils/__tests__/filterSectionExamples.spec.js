'use strict';

var _deepfreeze = require('deepfreeze');

var _deepfreeze2 = _interopRequireDefault(_deepfreeze);

var _filterSectionExamples = require('../filterSectionExamples');

var _filterSectionExamples2 = _interopRequireDefault(_filterSectionExamples);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var section = (0, _deepfreeze2.default)({
	content: ['a', 'b', 'c', 'd'],
	other: 'info'
});

describe('filterSectionExamples', function () {
	it('should return a shallow copy of a section with example filtered by given index', function () {
		var result = (0, _filterSectionExamples2.default)(section, 2);
		expect(result).toEqual({
			content: ['c'],
			other: 'info'
		});
	});
});