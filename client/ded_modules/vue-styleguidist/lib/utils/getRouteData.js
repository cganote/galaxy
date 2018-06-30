'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getRouteData;

var _isFinite = require('lodash/isFinite');

var _isFinite2 = _interopRequireDefault(_isFinite);

var _filterComponentExamples = require('./filterComponentExamples');

var _filterComponentExamples2 = _interopRequireDefault(_filterComponentExamples);

var _filterComponentsInSectionsByExactName = require('./filterComponentsInSectionsByExactName');

var _filterComponentsInSectionsByExactName2 = _interopRequireDefault(_filterComponentsInSectionsByExactName);

var _filterSectionExamples = require('./filterSectionExamples');

var _filterSectionExamples2 = _interopRequireDefault(_filterSectionExamples);

var _filterSectionByLevel = require('./filterSectionByLevel');

var _filterSectionByLevel2 = _interopRequireDefault(_filterSectionByLevel);

var _findSection = require('./findSection');

var _findSection2 = _interopRequireDefault(_findSection);

var _findSectionForSlug = require('./findSectionForSlug');

var _findSectionForSlug2 = _interopRequireDefault(_findSectionForSlug);

var _getInfoFromHash2 = require('./getInfoFromHash');

var _getInfoFromHash3 = _interopRequireDefault(_getInfoFromHash2);

var _getIdParam = require('./getIdParam');

var _getIdParam2 = _interopRequireDefault(_getIdParam);

var _consts = require('../consts');

var _getUrl = require('./getUrl');

var _getUrl2 = _interopRequireDefault(_getUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Return sections / components / examples to show on a screen according to a current route.
 *
 * Default: show all sections and components.
 * #!/Button: show only Button section or Button component
 * #!/Button/1: show only the second example (index 1) of Button component
 *
 * @param {object} sections
 * @param {string} hash
 * @param {boolean} navigation
 * @returns {object}
 */
function getRouteData(sections, hash, navigation) {
	// Parse URL hash to check if the components list must be filtered
	var _getInfoFromHash = (0, _getInfoFromHash3.default)(hash),
	    targetName = _getInfoFromHash.targetName,
	    targetIndex = _getInfoFromHash.targetIndex;

	var id = (0, _getIdParam2.default)();
	var displayMode = _consts.DisplayModes.all;

	if (navigation && !targetName && sections[0]) {
		var _name = sections[0].name;
		window.location.href = (0, _getUrl2.default)({ name: _name, isolated: true });
	}

	// Filter the requested component if required
	if (targetName) {
		var filteredComponents = (0, _filterComponentsInSectionsByExactName2.default)(sections, targetName);
		if (filteredComponents.length) {
			sections = [{ components: filteredComponents }];
			displayMode = _consts.DisplayModes.component;
		} else {
			var section = void 0;

			section = (0, _findSection2.default)(sections, targetName);
			if (section && navigation && !id) {
				section = (0, _filterSectionByLevel2.default)(section);
			} else if (section && navigation && id) {
				var sectionSlug = (0, _findSectionForSlug2.default)(section, id);
				if (sectionSlug) {
					section = sectionSlug;
				} else {
					window.location.href = (0, _getUrl2.default)({ name: name, isolated: true });
				}
			}
			sections = section ? [section] : [];
			displayMode = _consts.DisplayModes.section;
		}

		// If a single component or section is filtered and a fenced block index is specified hide all other examples
		if ((0, _isFinite2.default)(targetIndex)) {
			if (filteredComponents.length === 1) {
				sections = [{ components: [(0, _filterComponentExamples2.default)(filteredComponents[0], targetIndex)] }];
				displayMode = _consts.DisplayModes.example;
			} else if (sections.length === 1) {
				sections = [(0, _filterSectionExamples2.default)(sections[0], targetIndex)];
				displayMode = _consts.DisplayModes.example;
			}
		}
	}

	return { sections: sections, displayMode: displayMode };
}