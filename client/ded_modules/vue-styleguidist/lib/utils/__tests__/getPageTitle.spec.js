'use strict';

var _getPageTitle = require('../getPageTitle');

var _getPageTitle2 = _interopRequireDefault(_getPageTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseTitle = 'Styleguide';

describe('getPageTitle', function () {
	xit('should return style guide title for the all view', function () {
		var result = (0, _getPageTitle2.default)([], baseTitle, 'all');
		expect(result).toBe(baseTitle);
	});

	it('should return component name for component isolation mode', function () {
		var name = 'Component';
		var result = (0, _getPageTitle2.default)([{ components: [{ name: name }] }], baseTitle, 'component');
		expect(result).toMatch(name);
	});

	it('should return component name for example isolation mode', function () {
		var name = 'Component';
		var result = (0, _getPageTitle2.default)([{ components: [{ name: name }] }], baseTitle, 'example');
		expect(result).toMatch(name);
	});

	it('should return section name for section isolation mode', function () {
		var name = 'Section';
		var result = (0, _getPageTitle2.default)([{ name: name }], baseTitle, 'section');
		expect(result).toMatch(name);
	});
});