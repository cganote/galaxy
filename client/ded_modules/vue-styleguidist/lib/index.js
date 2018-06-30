'use strict';

require('./polyfills');

require('./styles');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _renderStyleguide = require('./utils/renderStyleguide');

var _renderStyleguide2 = _interopRequireDefault(_renderStyleguide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Examples code revision to rerender only code examples (not the whole page) when code changes
// eslint-disable-next-line no-unused-vars
/* eslint-disable import/first */
var codeRevision = 0;

/** Scrolls to origin when current window location hash points to an isolated view. */
var scrollToOrigin = function scrollToOrigin() {
	if (window.location.hash.indexOf('#!/') === 0) {
		window.scrollTo(0, 0);
	}
};

var render = function render() {
	// eslint-disable-next-line import/no-unresolved
	var styleguide = require('!!../loaders/styleguide-loader!./index.js');
	var containerId = 'rsg-root';

	if (document.getElementById('app')) {
		// eslint-disable-next-line no-console
		console.warn("The use of 'app' element id in the template is deprecated. Please, update your template file to use 'rsg-root' as the container id.");
		containerId = 'app';
	}

	_reactDom2.default.render((0, _renderStyleguide2.default)(styleguide, codeRevision), document.getElementById(containerId));
};

window.addEventListener('hashchange', render);
window.addEventListener('hashchange', scrollToOrigin);

/* istanbul ignore if */
if (module.hot) {
	module.hot.accept('!!../loaders/styleguide-loader!./index.js', function () {
		codeRevision += 1;
		render();
	});
}

render();