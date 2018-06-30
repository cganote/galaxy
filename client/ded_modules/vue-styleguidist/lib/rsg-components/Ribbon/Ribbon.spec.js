'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Ribbon = require('./Ribbon');

var _Ribbon2 = _interopRequireDefault(_Ribbon);

var _RibbonRenderer = require('./RibbonRenderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
	classes: classes(_RibbonRenderer.styles)
};

describe('Ribbon', function () {
	it('should render ribbon if the ribbon is present in the config', function () {
		var actual = shallow(_react2.default.createElement(_Ribbon2.default, null), { context: { config: { ribbon: { url: 'foo.bar' } } } });

		expect(actual).toMatchSnapshot();
	});

	it('should return null if the ribbon is not present in the config', function () {
		var actual = shallow(_react2.default.createElement(_Ribbon2.default, null), { context: { config: {} } });

		expect(actual.type()).toBeNull();
	});
});
describe('RibbonRenderer', function () {
	it('should render ribbon with url', function () {
		var actual = shallow(_react2.default.createElement(_RibbonRenderer.RibbonRenderer, _extends({}, props, { url: 'http://example.com' })));

		expect(actual).toMatchSnapshot();
	});

	it('should render ribbon with a text', function () {
		var actual = shallow(_react2.default.createElement(_RibbonRenderer.RibbonRenderer, _extends({}, props, { url: 'http://example.com', text: 'Share the repo' })));

		expect(actual).toMatchSnapshot();
	});
});