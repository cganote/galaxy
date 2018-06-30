'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TableRenderer = TableRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Styled = require('rsg-components/Styled');

var _Styled2 = _interopRequireDefault(_Styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(_ref) {
	var space = _ref.space;
	return {
		table: {
			marginTop: 0,
			marginBottom: space[2],
			borderCollapse: 'collapse'
		}
	};
};

function TableRenderer(_ref2) {
	var classes = _ref2.classes,
	    children = _ref2.children;

	return _react2.default.createElement(
		'table',
		{ className: classes.table },
		children
	);
}
TableRenderer.propTypes = {
	classes: _propTypes2.default.object.isRequired,
	children: _propTypes2.default.node.isRequired
};

exports.default = (0, _Styled2.default)(styles)(TableRenderer);