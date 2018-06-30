'use strict';

var _deepfreeze = require('deepfreeze');

var _deepfreeze2 = _interopRequireDefault(_deepfreeze);

var _filterSectionsByName = require('../filterSectionsByName');

var _filterSectionsByName2 = _interopRequireDefault(_filterSectionsByName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sections = (0, _deepfreeze2.default)([{
	name: 'General',
	sections: [{
		name: 'Particles',
		components: [{
			name: 'Button'
		}, {
			name: 'Image'
		}]
	}]
}]);

describe('filterSectionsByName', function () {
	it('should recursively filter sections and components by name', function () {
		var result = (0, _filterSectionsByName2.default)(sections, 'button');
		expect(result).toMatchSnapshot();
	});

	it('should skip sections without matches inside', function () {
		var result = (0, _filterSectionsByName2.default)(sections, 'general');
		expect(result).toMatchSnapshot();
	});

	it('should return empty array if no components of sections match query', function () {
		var result = (0, _filterSectionsByName2.default)(sections, 'pizza');
		expect(result).toEqual([]);
	});
});