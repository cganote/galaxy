'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Ribbon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _RibbonRenderer = require('rsg-components/Ribbon/RibbonRenderer');

var _RibbonRenderer2 = _interopRequireDefault(_RibbonRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Ribbon(props, _ref) {
	var config = _ref.config;
	var ribbon = config.ribbon;

	return ribbon ? _react2.default.createElement(_RibbonRenderer2.default, ribbon) : null;
}

Ribbon.contextTypes = {
	config: _propTypes2.default.object
};