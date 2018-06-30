'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.styles = undefined;
exports.ParaRenderer = ParaRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Styled = require('rsg-components/Styled');

var _Styled2 = _interopRequireDefault(_Styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(_ref) {
	var space = _ref.space,
	    color = _ref.color,
	    fontFamily = _ref.fontFamily;
	return {
		para: {
			marginTop: 0,
			marginBottom: space[2],
			color: color.base,
			fontFamily: fontFamily.base,
			fontSize: 'inherit',
			lineHeight: 1.5
		}
	};
};

function ParaRenderer(_ref2) {
	var classes = _ref2.classes,
	    semantic = _ref2.semantic,
	    children = _ref2.children;

	var Tag = semantic || 'div';

	return _react2.default.createElement(
		Tag,
		{ className: classes.para },
		children
	);
}

ParaRenderer.propTypes = {
	classes: _propTypes2.default.object.isRequired,
	semantic: _propTypes2.default.oneOf(['p']),
	children: _propTypes2.default.node.isRequired
};

exports.default = (0, _Styled2.default)(styles)(ParaRenderer);