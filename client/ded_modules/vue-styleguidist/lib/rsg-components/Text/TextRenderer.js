'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.TextRenderer = TextRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Styled = require('rsg-components/Styled');

var _Styled2 = _interopRequireDefault(_Styled);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = exports.styles = function styles(_ref) {
	var fontFamily = _ref.fontFamily,
	    fontSize = _ref.fontSize,
	    color = _ref.color;
	return {
		text: {
			fontFamily: fontFamily.base
		},
		inheritSize: {
			fontSize: 'inherit'
		},
		smallSize: {
			fontSize: fontSize.small
		},
		baseSize: {
			fontSize: fontSize.base
		},
		textSize: {
			fontSize: fontSize.text
		},
		baseColor: {
			color: color.base
		},
		lightColor: {
			color: color.light
		},
		em: {
			fontStyle: 'italic'
		},
		strong: {
			fontWeight: 'bold'
		},
		isUnderlined: {
			borderBottom: [[1, 'dotted', color.lightest]]
		}
	};
};

function TextRenderer(_ref2) {
	var _cx;

	var classes = _ref2.classes,
	    semantic = _ref2.semantic,
	    size = _ref2.size,
	    color = _ref2.color,
	    underlined = _ref2.underlined,
	    children = _ref2.children,
	    props = _objectWithoutProperties(_ref2, ['classes', 'semantic', 'size', 'color', 'underlined', 'children']);

	var Tag = semantic || 'span';
	var classNames = (0, _classnames2.default)(classes.text, classes[size + 'Size'], classes[color + 'Color'], (_cx = {}, _defineProperty(_cx, classes[semantic], semantic), _defineProperty(_cx, classes.isUnderlined, underlined), _cx));

	return _react2.default.createElement(
		Tag,
		_extends({}, props, { className: classNames }),
		children
	);
}

TextRenderer.propTypes = {
	classes: _propTypes2.default.object.isRequired,
	semantic: _propTypes2.default.oneOf(['em', 'strong']),
	size: _propTypes2.default.oneOf(['inherit', 'small', 'base', 'text']),
	color: _propTypes2.default.oneOf(['base', 'light']),
	underlined: _propTypes2.default.bool,
	children: _propTypes2.default.node.isRequired
};

TextRenderer.defaultProps = {
	size: 'inherit',
	color: 'base',
	underlined: false
};

exports.default = (0, _Styled2.default)(styles)(TextRenderer);