'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Markdown List', function () {
	it('should render an unordered list', function () {
		var actual = render(_react2.default.createElement(
			_index2.default,
			null,
			_react2.default.createElement(
				'li',
				null,
				'First'
			),
			_react2.default.createElement(
				'li',
				null,
				'Second'
			)
		));

		expect(actual).toMatchSnapshot();
	});

	it('should render an ordered list', function () {
		var actual = render(_react2.default.createElement(
			_index2.default,
			{ ordered: true },
			_react2.default.createElement(
				'li',
				null,
				'First'
			),
			_react2.default.createElement(
				'li',
				null,
				'Second'
			)
		));

		expect(actual).toMatchSnapshot();
	});
});