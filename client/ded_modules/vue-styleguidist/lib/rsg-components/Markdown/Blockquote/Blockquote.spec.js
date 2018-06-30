'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Markdown Blockquote', function () {
	it('should render a blockquote', function () {
		var actual = render(_react2.default.createElement(
			_index2.default,
			null,
			'To be, or not to be: that is the question'
		));

		expect(actual).toMatchSnapshot();
	});
});