'use strict';

var _findSection = require('../findSection');

var _findSection2 = _interopRequireDefault(_findSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sections = [{
	name: 'General',
	sections: [{
		name: 'Particles',
		components: [{
			name: 'Button'
		}, {
			name: 'Image'
		}]
	}]
}];

describe('findSection', function () {
	it('should return top level section', function () {
		var result = (0, _findSection2.default)(sections, 'General');
		expect(result).toEqual(sections[0]);
	});

	it('should return nested sections', function () {
		var result = (0, _findSection2.default)(sections, 'Particles');
		expect(result).toEqual(sections[0].sections[0]);
	});

	it('should return undefined when no sections found', function () {
		var result = (0, _findSection2.default)(sections, 'Pizza');
		expect(result).toBeFalsy();
	});
});