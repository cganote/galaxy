'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _IsolateButton = require('./IsolateButton');

var _IsolateButton2 = _interopRequireDefault(_IsolateButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('slots', function () {
	it('should contain IsolateButton in toolbars if pagePerSection is false', function () {
		var config = (0, _index2.default)({ pagePerSection: false });
		expect(config.componentToolbar).toContain(_IsolateButton2.default);
		expect(config.exampleToolbar).toContain(_IsolateButton2.default);
		expect(config.sectionToolbar).toContain(_IsolateButton2.default);
	});

	it('should not contain IsolateButton in toolbars if pagePerSection is true', function () {
		var config = (0, _index2.default)({ pagePerSection: true });
		expect(config.componentToolbar).not.toContain(_IsolateButton2.default);
		expect(config.exampleToolbar).not.toContain(_IsolateButton2.default);
		expect(config.sectionToolbar).not.toContain(_IsolateButton2.default);
	});
});