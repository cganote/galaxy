'use strict';

var _deepfreeze = require('deepfreeze');

var _deepfreeze2 = _interopRequireDefault(_deepfreeze);

var _processComponents = require('../processComponents');

var _processComponents2 = _interopRequireDefault(_processComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('processComponents', function () {
	it('should set components’ displayName to a name property', function () {
		var components = (0, _deepfreeze2.default)([{
			props: {
				displayName: 'Foo'
			},
			module: 13
		}]);
		var result = (0, _processComponents2.default)(components);
		expect(result[0].name).toBe('Foo');
	});

	it('should append @example doclet to all examples', function () {
		var components = (0, _deepfreeze2.default)([{
			props: {
				displayName: 'Foo',
				examples: [1, 2],
				example: [3, 4]
			},
			module: 11
		}]);
		var result = (0, _processComponents2.default)(components);
		expect(result[0].props.examples).toEqual([1, 2, 3, 4]);
	});
});