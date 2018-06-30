'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Heading = require('rsg-components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Styled = require('rsg-components/Styled');

var _Styled2 = _interopRequireDefault(_Styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SectionHeadingRenderer(_ref) {
	var classes = _ref.classes,
	    children = _ref.children,
	    toolbar = _ref.toolbar,
	    id = _ref.id,
	    href = _ref.href,
	    depth = _ref.depth,
	    deprecated = _ref.deprecated;

	var headingLevel = Math.min(6, depth);
	var sectionNameClasses = (0, _classnames2.default)(classes.sectionName, _defineProperty({}, classes.isDeprecated, deprecated));

	return _react2.default.createElement(
		'div',
		{ className: classes.wrapper },
		_react2.default.createElement(
			_Heading2.default,
			{ level: headingLevel, id: id },
			_react2.default.createElement(
				'a',
				{ href: href, className: sectionNameClasses },
				children
			)
		),
		_react2.default.createElement(
			'div',
			{ className: classes.toolbar },
			toolbar
		)
	);
}

var styles = function styles(_ref2) {
	var color = _ref2.color,
	    space = _ref2.space;
	return {
		wrapper: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			marginBottom: space[1]
		},
		toolbar: {
			marginLeft: 'auto'
		},
		sectionName: {
			'&:hover, &:active': {
				isolate: false,
				textDecoration: 'underline',
				cursor: 'pointer'
			}
		},
		isDeprecated: {
			textDecoration: 'line-through',
			color: color.light
		}
	};
};

SectionHeadingRenderer.propTypes = {
	classes: _propTypes2.default.object.isRequired,
	children: _propTypes2.default.node,
	toolbar: _propTypes2.default.node,
	id: _propTypes2.default.string.isRequired,
	href: _propTypes2.default.string.isRequired,
	depth: _propTypes2.default.number.isRequired,
	deprecated: _propTypes2.default.bool
};

exports.default = (0, _Styled2.default)(styles)(SectionHeadingRenderer);