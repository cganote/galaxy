'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cheerio = require('cheerio');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Markdown Heading', function () {
	it('should render a heading with a wrapper that provides margin', function () {
		var actual = render(_react2.default.createElement(
			_index2.default,
			{ level: 2 },
			'The markdown heading'
		));

		expect((0, _cheerio.html)(actual)).toMatchSnapshot();
	});
});