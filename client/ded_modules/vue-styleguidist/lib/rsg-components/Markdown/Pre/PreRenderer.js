'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PreRenderer = PreRenderer;

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
	    fontFamily = _ref.fontFamily,
	    borderRadius = _ref.borderRadius;
	return {
		pre: {
			fontFamily: fontFamily.base,
			fontSize: fontSize.small,
			lineHeight: 1.5,
			color: color.base,
			whiteSpace: 'pre',
			backgroundColor: color.codeBackground,
			padding: [[space[1], space[2]]],
			border: [[1, color.border, 'solid']],
			borderRadius: borderRadius,
			marginTop: 0,
			marginBottom: space[2]
		}
	};
};

function PreRenderer(_ref2) {
	var classes = _ref2.classes,
	    children = _ref2.children;

	return _react2.default.createElement(
		'pre',
		{ className: classes.pre },
		children
	);
}
PreRenderer.propTypes = {
	classes: _propTypes2.default.object.isRequired,
	children: _propTypes2.default.node.isRequired
};

exports.default = (0, _Styled2.default)(styles)(PreRenderer);