'use strict';

var _getFilterRegExp = require('../getFilterRegExp');

var _getFilterRegExp2 = _interopRequireDefault(_getFilterRegExp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getFilterRegExp', function () {
	it('should return a RegExp', function () {
		var result = (0, _getFilterRegExp2.default)('');
		expect(result instanceof RegExp).toBe(true);
	});

	it('RegExp should fuzzy match a string', function () {
		var result = (0, _getFilterRegExp2.default)('btn');
		expect('button').toMatch(result);
	});

	it('RegExp should not match when string is different', function () {
		var result = (0, _getFilterRegExp2.default)('buttons');
		expect('button').not.toMatch(result);
	});

	it('should not throw when query contains special characters', function () {
		var fn = function fn() {
			return (0, _getFilterRegExp2.default)('\\');
		};
		expect(fn).not.toThrow();
	});

	it('RegExp should ignore non-alphanumeric characters', function () {
		var result = (0, _getFilterRegExp2.default)('#$b()tn');
		expect('button').toMatch(result);
	});
});