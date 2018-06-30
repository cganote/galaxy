'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Markdown Pre', function () {
	it('should render a pre', function () {
		var actual = render(_react2.default.createElement(
			_index2.default,
			null,
			'This is pre-formatted text.'
		));

		expect(actual).toMatchSnapshot();
	});
});