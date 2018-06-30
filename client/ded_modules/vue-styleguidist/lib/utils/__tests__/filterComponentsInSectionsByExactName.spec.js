'use strict';

var _deepfreeze = require('deepfreeze');

var _deepfreeze2 = _interopRequireDefault(_deepfreeze);

var _filterComponentsInSectionsByExactName = require('../filterComponentsInSectionsByExactName');

var _filterComponentsInSectionsByExactName2 = _interopRequireDefault(_filterComponentsInSectionsByExactName);

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

describe('filterComponentsInSectionsByExactName', function () {
	it('should return components at any level with exact name', function () {
		var result = (0, _filterComponentsInSectionsByExactName2.default)(sections, 'Image');
		expect(result.map(function (x) {
			return x.name;
		})).toEqual(['Image']);
	});
});