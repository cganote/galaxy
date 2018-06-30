'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.styles = undefined;
exports.RibbonRenderer = RibbonRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Styled = require('rsg-components/Styled');

var _Styled2 = _interopRequireDefault(_Styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(_ref) {
	var color = _ref.color,
	    space = _ref.space,
	    fontSize = _ref.fontSize,
	    fontFamily = _ref.fontFamily;
	return {
		root: {
			position: 'fixed',
			top: 0,
			right: 0,
			width: 149,
			height: 149,
			zIndex: 999
		},
		link: {
			fontFamily: fontFamily.base,
			position: 'relative',
			right: -37,
			top: -22,
			display: 'block',
			width: 190,
			padding: [[space[0], space[2]]],
			textAlign: 'center',
			color: color.ribbonText,
			fontSize: fontSize.base,
			background: color.ribbonBackground,
			textDecoration: 'none',
			textShadow: [[0, '-1px', 0, 'rgba(0,0,0,.15)']],
			transformOrigin: [[0, 0]],
			transform: 'rotate(45deg)',
			cursor: 'pointer'
		}
	};
};

function RibbonRenderer(_ref2) {
	var classes = _ref2.classes,
	    url = _ref2.url,
	    text = _ref2.text;

	return _react2.default.createElement(
		'div',
		{ className: classes.root },
		_react2.default.createElement(
			'a',
			{ href: url, className: classes.link },
			text
		)
	);
}

RibbonRenderer.defaultProps = {
	text: 'Fork me on GitHub'
};

RibbonRenderer.propTypes = {
	classes: _propTypes2.default.object.isRequired,
	url: _propTypes2.default.string.isRequired,
	text: _propTypes2.default.string
};

exports.default = (0, _Styled2.default)(styles)(RibbonRenderer);