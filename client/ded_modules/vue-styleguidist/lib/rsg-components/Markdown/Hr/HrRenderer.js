'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.HrRenderer = HrRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Styled = require('rsg-components/Styled');

var _Styled2 = _interopRequireDefault(_Styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(_ref) {
	var space = _ref.space,
	    color = _ref.color;
	return {
		hr: {
			borderBottom: [[1, color.border, 'solid']],
			marginTop: 0,
			marginBottom: space[2]
		}
	};
};

function HrRenderer(_ref2) {
	var classes = _ref2.classes;

	return _react2.default.createElement('hr', { className: classes.hr });
}
HrRenderer.propTypes = {
	classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _Styled2.default)(styles)(HrRenderer);