'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cheerio = require('cheerio');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Heading', function () {
	it('should render a heading according to the level', function () {
		var actual = shallow(_react2.default.createElement(
			_index2.default,
			{ level: 3 },
			'The heading'
		));
		expect(actual.dive().name()).toBe('h3');

		actual = shallow(_react2.default.createElement(
			_index2.default,
			{ level: 5 },
			'The heading'
		));
		expect(actual.dive().name()).toBe('h5');
	});

	it('should render a heading', function () {
		var actual = render(_react2.default.createElement(
			_index2.default,
			{ level: 2 },
			'The heading'
		));

		expect((0, _cheerio.html)(actual)).toMatchSnapshot();
	});
});