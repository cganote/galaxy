'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableRenderer = require('./TableRenderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var columns = [{
	caption: 'Name',
	// eslint-disable-next-line react/prop-types
	render: function render(_ref) {
		var name = _ref.name;
		return _react2.default.createElement(
			'span',
			null,
			'name: ',
			name
		);
	}
}, {
	caption: 'Type',
	// eslint-disable-next-line react/prop-types
	render: function render(_ref2) {
		var type = _ref2.type;
		return _react2.default.createElement(
			'span',
			null,
			'type: ',
			type
		);
	}
}];
var rows = [{ name: 'Quattro formaggi', type: 'pizza' }, { name: 'Tiramisu', type: 'desert' }, { name: 'Unicorn', type: 'animal' }];
var props = {
	classes: classes(_TableRenderer.styles),
	getRowKey: function getRowKey(row) {
		return row.name;
	}
};

it('should render a table', function () {
	var actual = shallow(_react2.default.createElement(_TableRenderer.TableRenderer, _extends({}, props, { columns: columns, rows: rows })));

	expect(actual).toMatchSnapshot();
});