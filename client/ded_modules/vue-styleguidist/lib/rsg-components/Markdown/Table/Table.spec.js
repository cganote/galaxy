'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Markdown Table', function () {
	it('should render a table', function () {
		var actual = render(_react2.default.createElement(
			_index.Table,
			null,
			_react2.default.createElement(
				_index.TableHead,
				null,
				_react2.default.createElement(
					_index.TableRow,
					null,
					_react2.default.createElement(
						_index.TableCell,
						{ header: true },
						'1st header'
					),
					_react2.default.createElement(
						_index.TableCell,
						{ header: true },
						'2nd header'
					)
				)
			),
			_react2.default.createElement(
				_index.TableBody,
				null,
				_react2.default.createElement(
					_index.TableRow,
					null,
					_react2.default.createElement(
						_index.TableCell,
						null,
						'1st cell'
					),
					_react2.default.createElement(
						_index.TableCell,
						null,
						'2nd cell'
					)
				)
			)
		));

		expect(actual).toMatchSnapshot();
	});
});