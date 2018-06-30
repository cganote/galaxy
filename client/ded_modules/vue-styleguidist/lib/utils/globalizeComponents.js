'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = globalizeComponents;

var _globalizeComponent = require('./globalizeComponent');

var _globalizeComponent2 = _interopRequireDefault(_globalizeComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Expose all components in all sections as global variables.
 *
 * @param {array} sections
 */
function globalizeComponents(sections) {
	sections.forEach(function (section) {
		if (section.components) {
			section.components.forEach(_globalizeComponent2.default);
		}
		if (section.sections) {
			globalizeComponents(section.sections);
		}
	});
}