'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = filterSectionsByName;

var _getFilterRegExp = require('./getFilterRegExp');

var _getFilterRegExp2 = _interopRequireDefault(_getFilterRegExp);

var _filterComponentsByName = require('./filterComponentsByName');

var _filterComponentsByName2 = _interopRequireDefault(_filterComponentsByName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Fuzzy filters sections by section or component name.
 *
 * @param {Array} sections
 * @param {string} query
 * @return {Array}
 */
function filterSectionsByName(sections, query) {
	var regExp = (0, _getFilterRegExp2.default)(query);

	return sections.map(function (section) {
		return _extends({}, section, {
			sections: section.sections ? filterSectionsByName(section.sections, query) : [],
			components: section.components ? (0, _filterComponentsByName2.default)(section.components, query) : []
		});
	}).filter(function (section) {
		return section.components.length > 0 || section.sections.length > 0 || regExp.test(section.name);
	});
}