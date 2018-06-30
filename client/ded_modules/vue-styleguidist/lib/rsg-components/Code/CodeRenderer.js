'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CodeRenderer = CodeRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Styled = require('rsg-components/Styled');

var _Styled2 = _interopRequireDefault(_Styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(_ref) {
	var fontFamily = _ref.fontFamily;
	return {
		code: {
			fontFamily: fontFamily.monospace,
			fontSize: 'inherit',
			color: 'inherit',
			background: 'transparent',
			whiteSpace: 'inherit'
		}
	};
};

function CodeRenderer(_ref2) {
	var classes = _ref2.classes,
	    className = _ref2.className,
	    children = _ref2.children;

	var classNames = (0, _classnames2.default)(className, classes.code);

	var isHighlighted = className && className.indexOf('lang-') !== -1;
	if (isHighlighted) {
		return _react2.default.createElement('code', { className: classNames, dangerouslySetInnerHTML: { __html: children } });
	}
	return _react2.default.createElement(
		'code',
		{ className: classNames },
		children
	);
}
CodeRenderer.propTypes = {
	classes: _propTypes2.default.object.isRequired,
	className: _propTypes2.default.string,
	children: _propTypes2.default.node.isRequired
};

exports.default = (0, _Styled2.default)(styles)(CodeRenderer);