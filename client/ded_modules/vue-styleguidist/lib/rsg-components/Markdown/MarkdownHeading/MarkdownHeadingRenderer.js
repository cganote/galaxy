'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Styled = require('rsg-components/Styled');

var _Styled2 = _interopRequireDefault(_Styled);

var _Heading = require('rsg-components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(_ref) {
	var space = _ref.space;
	return {
		spacing: {
			marginBottom: space[2]
		}
	};
};

function MarkdownHeadingRenderer(_ref2) {
	var classes = _ref2.classes,
	    level = _ref2.level,
	    children = _ref2.children;

	return _react2.default.createElement(
		'div',
		{ className: classes.spacing },
		_react2.default.createElement(
			_Heading2.default,
			{ level: level },
			children
		)
	);
}

MarkdownHeadingRenderer.propTypes = {
	classes: _propTypes2.default.object.isRequired,
	level: _propTypes2.default.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
	children: _propTypes2.default.node
};

exports.default = (0, _Styled2.default)(styles)(MarkdownHeadingRenderer);