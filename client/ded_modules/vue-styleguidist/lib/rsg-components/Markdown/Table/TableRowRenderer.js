'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TableRowRenderer = TableRowRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TableRowRenderer(_ref) {
	var children = _ref.children;

	return _react2.default.createElement(
		'tr',
		null,
		children
	);
}
TableRowRenderer.propTypes = {
	children: _propTypes2.default.node.isRequired
};

exports.default = TableRowRenderer;