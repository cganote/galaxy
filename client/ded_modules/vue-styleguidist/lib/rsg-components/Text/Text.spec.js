'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextRenderer = require('./TextRenderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
	classes: classes(_TextRenderer.styles)
};

describe('Text', function () {
	it('should render text', function () {
		var actual = shallow(_react2.default.createElement(
			_TextRenderer.TextRenderer,
			props,
			'Pizza'
		));

		expect(actual).toMatchSnapshot();
	});

	it('should render underlined text', function () {
		var actual = shallow(_react2.default.createElement(
			_TextRenderer.TextRenderer,
			_extends({}, props, { underlined: true }),
			'Pizza'
		));

		expect(actual).toMatchSnapshot();
	});

	it('should render sized text', function () {
		var actual = shallow(_react2.default.createElement(
			_TextRenderer.TextRenderer,
			_extends({}, props, { size: 'small' }),
			'Pizza'
		));

		expect(actual).toMatchSnapshot();
	});

	it('should render colored text', function () {
		var actual = shallow(_react2.default.createElement(
			_TextRenderer.TextRenderer,
			_extends({}, props, { color: 'light' }),
			'Pizza'
		));

		expect(actual).toMatchSnapshot();
	});

	it('should render text with a semantic tag and styles', function () {
		var actual = shallow(_react2.default.createElement(
			_TextRenderer.TextRenderer,
			_extends({}, props, { semantic: 'strong' }),
			'Pizza'
		));

		expect(actual).toMatchSnapshot();
	});

	it('should render text with a title', function () {
		var actual = shallow(_react2.default.createElement(
			_TextRenderer.TextRenderer,
			_extends({}, props, { title: 'Pasta' }),
			'Pizza'
		));

		expect(actual).toMatchSnapshot();
	});
});