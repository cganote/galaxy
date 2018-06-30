'use strict';

var _deepfreeze = require('deepfreeze');

var _deepfreeze2 = _interopRequireDefault(_deepfreeze);

var _filterComponentsByName = require('../filterComponentsByName');

var _filterComponentsByName2 = _interopRequireDefault(_filterComponentsByName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = (0, _deepfreeze2.default)([{
	name: 'Button'
}, {
	name: 'Image'
}, {
	name: 'Input'
}, {
	name: 'Link'
}, {
	name: 'Textarea'
}]);

describe('filterComponentsByName', function () {
	it('should return initial list with empty query', function () {
		var result = (0, _filterComponentsByName2.default)(components, '');
		expect(result).toEqual(components);
	});

	it('should return filtered list, should ignore case', function () {
		var result = (0, _filterComponentsByName2.default)(components, 'button');
		expect(result).toEqual([{ name: 'Button' }]);
	});

	it('should return empty list when nothing found', function () {
		var result = (0, _filterComponentsByName2.default)(components, 'pizza');
		expect(result).toEqual([]);
	});

	it('should return all components if all of them match query', function () {
		// It doesn’t happen when RegExp has global flag for some reason
		var components = [{ name: 'Button' }, { name: 'CounterButton' }, { name: 'PushButton' }, { name: 'RandomButtom' }, { name: 'WrappedButton' }];
		var result = (0, _filterComponentsByName2.default)(components, 'bu');
		expect(result).toEqual(components);
	});
});