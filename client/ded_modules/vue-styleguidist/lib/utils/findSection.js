'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = findSection;

var _find = require('lodash/find');

var _find2 = _interopRequireDefault(_find);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Recursively finds a section with a given name (exact match)
 *
 * @param  {Array}  sections
 * @param  {string} name
 * @return {object}
 */
function findSection(sections, name) {
	var found = (0, _find2.default)(sections, function (section) {
		return section.name.replace(/\s/g, '%20') === name.replace(/\s/g, '%20');
	});
	if (found) {
		return found;
	}

	for (var i = 0; i < sections.length; i++) {
		var section = sections[i];
		if (!section.sections || section.sections.length === 0) {
			continue;
		}
		var _found = findSection(section.sections, name);
		if (_found) {
			return _found;
		}
	}

	return undefined;
}