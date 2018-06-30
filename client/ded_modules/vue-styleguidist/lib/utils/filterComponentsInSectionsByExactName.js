'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = filterComponentsInSectionsByExactName;

var _filterComponentsByExactName = require('./filterComponentsByExactName');

var _filterComponentsByExactName2 = _interopRequireDefault(_filterComponentsByExactName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Recursively filters all components in all sections by component name.
 *
 * @param {object} sections
 * @param {string} name
 * @return {Array}
 */
function filterComponentsInSectionsByExactName(sections, name) {
	var components = [];
	sections.forEach(function (section) {
		if (section.components) {
			components.push.apply(components, _toConsumableArray((0, _filterComponentsByExactName2.default)(section.components, name)));
		}
		if (section.sections) {
			components.push.apply(components, _toConsumableArray(filterComponentsInSectionsByExactName(section.sections, name)));
		}
	});
	return components;
}