'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = renderStyleguide;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slots = require('rsg-components/slots');

var _slots2 = _interopRequireDefault(_slots);

var _StyleGuide = require('rsg-components/StyleGuide');

var _StyleGuide2 = _interopRequireDefault(_StyleGuide);

var _getPageTitle = require('./getPageTitle');

var _getPageTitle2 = _interopRequireDefault(_getPageTitle);

var _getRouteData2 = require('./getRouteData');

var _getRouteData3 = _interopRequireDefault(_getRouteData2);

var _globalizeComponents = require('./globalizeComponents');

var _globalizeComponents2 = _interopRequireDefault(_globalizeComponents);

var _processSections = require('./processSections');

var _processSections2 = _interopRequireDefault(_processSections);

var _processMixins = require('./processMixins');

var _processMixins2 = _interopRequireDefault(_processMixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {object} styleguide An object returned by styleguide-loader
 * @param {number} codeRevision
 * @param {Location} [loc]
 * @param {Document} [doc]
 * @param {History} [hist]
 * @return {React.ReactElement}
 */
function renderStyleguide(styleguide, codeRevision) {
	var loc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window.location;
	var doc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : document;
	var hist = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : window.history;

	var allSections = (0, _processSections2.default)(styleguide.sections, styleguide.vuex);
	(0, _processMixins2.default)(styleguide.mixins);

	// Globalize all components, not just ones we see on the screen, to make
	// all components accessible to all examples
	(0, _globalizeComponents2.default)(allSections);

	var _styleguide$config = styleguide.config,
	    title = _styleguide$config.title,
	    navigation = _styleguide$config.navigation;

	var _getRouteData = (0, _getRouteData3.default)(allSections, loc.hash, navigation),
	    sections = _getRouteData.sections,
	    displayMode = _getRouteData.displayMode;

	// Update page title


	doc.title = (0, _getPageTitle2.default)(sections, title, displayMode);
	// If the current hash location was set to just `/` (e.g. when navigating back from isolated view to overview)
	// replace the URL with one without hash, to present the user with a single address of the overview screen
	if (loc.hash === '#/') {
		var url = loc.pathname + loc.search;
		hist.replaceState('', doc.title, url);
	}

	return _react2.default.createElement(_StyleGuide2.default, {
		codeRevision: codeRevision,
		config: styleguide.config,
		renderRootJsx: styleguide.renderRootJsx,
		slots: (0, _slots2.default)(styleguide.config),
		welcomeScreen: styleguide.welcomeScreen,
		patterns: styleguide.patterns,
		sections: sections,
		allSections: allSections,
		displayMode: displayMode
	});
}