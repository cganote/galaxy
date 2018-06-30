'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = globalizeComponent;

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Expose component as global variables.
 *
 * @param {Object} component
 */
function globalizeComponent(component) {
	var displayName = component.props.displayName;
	if (!component.name) {
		return;
	}
	var configComponent = component.module.default || component.module;
	_vue2.default.component(displayName, configComponent);
}