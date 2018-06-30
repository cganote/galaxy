'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.CheckboxRenderer = CheckboxRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Styled = require('rsg-components/Styled');

var _Styled2 = _interopRequireDefault(_Styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = function styles() {
	return {
		input: {
			isolate: false,
			display: 'inline-block',
			verticalAlign: 'middle'
		}
	};
};

function CheckboxRenderer(_ref) {
	var classes = _ref.classes,
	    rest = _objectWithoutProperties(_ref, ['classes']);

	return _react2.default.createElement('input', _extends({}, rest, { type: 'checkbox', className: classes.input }));
}
CheckboxRenderer.propTypes = {
	classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _Styled2.default)(styles)(CheckboxRenderer);