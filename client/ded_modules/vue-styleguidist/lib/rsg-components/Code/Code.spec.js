'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CodeRenderer = require('./CodeRenderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Code blocks', function () {
	it('should render code', function () {
		var code = '<button>OK</button>';
		var actual = shallow(_react2.default.createElement(
			_CodeRenderer.CodeRenderer,
			{ classes: {} },
			code
		));

		expect(actual).toMatchSnapshot();
	});

	it('should render code to be highlighted', function () {
		var code = '<button>OK</button>';
		var actual = render(_react2.default.createElement(
			_CodeRenderer.CodeRenderer,
			{ classes: {}, className: 'lang-html' },
			code
		));

		expect(actual).toMatchSnapshot();
	});
});