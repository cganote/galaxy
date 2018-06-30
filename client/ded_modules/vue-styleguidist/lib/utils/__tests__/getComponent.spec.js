'use strict';

var _getComponent = require('../getComponent');

var _getComponent2 = _interopRequireDefault(_getComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

describe('getComponent', function () {
	describe('if there is a default export in the module', function () {
		it('should return that', function () {
			var module = { default: 'useMe' };
			var actual = (0, _getComponent2.default)(module);
			expect(actual).toBe(module.default);
		});
	});

	describe('if it is a CommonJS module and exports a function', function () {
		it('should return the module', function () {
			var testCases = [function () {}, function () {}, function Class() {
				_classCallCheck(this, Class);
			}];
			testCases.forEach(function (testCase) {
				var actual = (0, _getComponent2.default)(testCase);
				expect(actual).toBe(testCase);
			});
		});
	});

	describe('if there is only one named export in the module', function () {
		it('should return that', function () {
			var module = { oneNamedExport: 'isLonely' };
			var actual = (0, _getComponent2.default)(module);
			expect(actual).toBe(module.oneNamedExport);
		});
	});

	describe('if there is a named export whose name matches the name argument', function () {
		it('should return that', function () {
			var _module;

			var name = 'Component';
			var module = (_module = {}, _defineProperty(_module, name, 'isNamed'), _defineProperty(_module, 'OtherComponent', 'isAlsoNamed'), _module);
			var actual = (0, _getComponent2.default)(module, name);
			expect(actual).toBe(module[name]);
		});
	});

	describe('if there is more than one named export and no matching name', function () {
		it('should fall back on returning the module as a whole', function () {
			var name = 'Component';
			var module = { RandomName: 'isNamed', confusingExport: 123 };
			var actual = (0, _getComponent2.default)(module, name);
			expect(actual).toBe(module);
		});
	});
});