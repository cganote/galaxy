'use strict';

var _deepfreeze = require('deepfreeze');

var _deepfreeze2 = _interopRequireDefault(_deepfreeze);

var _filterComponentsByExactName = require('../filterComponentsByExactName');

var _filterComponentsByExactName2 = _interopRequireDefault(_filterComponentsByExactName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = (0, _deepfreeze2.default)([{
	name: 'Button'
}, {
	name: 'Image'
}]);

describe('filterComponentsByExactName', function () {
	it('should return components with exact name', function () {
		var result = (0, _filterComponentsByExactName2.default)(components, 'Image');
		expect(result.map(function (x) {
			return x.name;
		})).toEqual(['Image']);
	});
});