'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Styled = require('rsg-components/Styled');

var _Styled2 = _interopRequireDefault(_Styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = function styles(_ref) {
	var color = _ref.color,
	    fontFamily = _ref.fontFamily,
	    fontSize = _ref.fontSize;
	return {
		heading: {
			margin: 0,
			color: color.base,
			fontFamily: fontFamily.base,
			fontWeight: 'normal'
		},
		heading1: {
			fontSize: fontSize.h1
		},
		heading2: {
			fontSize: fontSize.h2
		},
		heading3: {
			fontSize: fontSize.h3
		},
		heading4: {
			fontSize: fontSize.h4
		},
		heading5: {
			fontSize: fontSize.h5
		},
		heading6: {
			fontSize: fontSize.h6
		}
	};
};

function HeadingRenderer(_ref2) {
	var classes = _ref2.classes,
	    level = _ref2.level,
	    children = _ref2.children,
	    props = _objectWithoutProperties(_ref2, ['classes', 'level', 'children']);

	var Tag = 'h' + level;
	var headingClasses = (0, _classnames2.default)(classes.heading, classes['heading' + level]);

	return _react2.default.createElement(
		Tag,
		_extends({}, props, { className: headingClasses }),
		children
	);
}

HeadingRenderer.propTypes = {
	classes: _propTypes2.default.object.isRequired,
	level: _propTypes2.default.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
	children: _propTypes2.default.node
};

exports.default = (0, _Styled2.default)(styles)(HeadingRenderer);