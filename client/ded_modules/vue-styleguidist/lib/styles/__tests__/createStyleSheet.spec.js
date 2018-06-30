'use strict';

var _theme = require('../theme');

var theme = _interopRequireWildcard(_theme);

var _createStyleSheet = require('../createStyleSheet');

var _createStyleSheet2 = _interopRequireDefault(_createStyleSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var customThemeColor = '#123456';
var customThemeBorderColor = '#654321';
var customThemeMaxWidth = 9999;

var customStyleBorderColor = '#ABCDEF';

var testComponentName = 'TestComponentName';
var testRuleName = 'testRule';

var styles = function styles(theme) {
	return _defineProperty({}, testRuleName, {
		color: theme.color.base,
		backgroundColor: theme.color.baseBackground,
		borderColor: theme.color.border,
		borderRadius: theme.borderRadius,
		maxWidth: theme.maxWidth
	});
};

var config = {
	theme: {
		color: {
			base: customThemeColor,
			border: customThemeBorderColor
		},
		maxWidth: customThemeMaxWidth
	},
	styles: _defineProperty({}, testComponentName, _defineProperty({}, testRuleName, {
		borderColor: customStyleBorderColor
	}))
};

describe('createStyleSheet', function () {
	it('should use theme variables', function () {
		var styleSheet = (0, _createStyleSheet2.default)(styles, config, testComponentName);
		var style = styleSheet.getRule(testRuleName).style;

		expect(style['background-color']).toBe(theme.color.baseBackground);
		expect(style['border-radius']).toBe(theme.borderRadius + 'px');
	});

	it('should override theme variables with config theme', function () {
		var styleSheet = (0, _createStyleSheet2.default)(styles, config, testComponentName);
		var style = styleSheet.getRule(testRuleName).style;

		expect(style.color).toBe(customThemeColor);
		expect(style['max-width']).toBe(customThemeMaxWidth + 'px');
	});

	it('should override config theme variables with config styles', function () {
		var styleSheet = (0, _createStyleSheet2.default)(styles, config, testComponentName);
		var style = styleSheet.getRule(testRuleName).style;

		expect(style['border-color']).toBe(customStyleBorderColor);
	});
});