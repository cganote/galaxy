'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TableCellRenderer = TableCellRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Styled = require('rsg-components/Styled');

var _Styled2 = _interopRequireDefault(_Styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(_ref) {
	var space = _ref.space,
	    color = _ref.color,
	    fontSize = _ref.fontSize,
	    fontFamily = _ref.fontFamily;
	return {
		td: {
			padding: [[space[0], space[2], space[0], 0]],
			fontFamily: fontFamily.base,
			fontSize: fontSize.base,
			color: color.base,
			lineHeight: 1.5
		},
		th: {
			composes: '$td',
			fontWeight: 'bold'
		}
	};
};

function TableCellRenderer(_ref2) {
	var classes = _ref2.classes,
	    header = _ref2.header,
	    children = _ref2.children;

	if (header) {
		return _react2.default.createElement(
			'th',
			{ className: classes.th },
			children
		);
	}

	return _react2.default.createElement(
		'td',
		{ className: classes.td },
		children
	);
}
TableCellRenderer.propTypes = {
	classes: _propTypes2.default.object.isRequired,
	header: _propTypes2.default.bool,
	children: _propTypes2.default.node.isRequired
};
TableCellRenderer.defaultProps = {
	header: false
};

exports.default = (0, _Styled2.default)(styles)(TableCellRenderer);