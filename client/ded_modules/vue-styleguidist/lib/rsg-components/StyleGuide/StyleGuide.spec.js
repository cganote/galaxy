'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableOfContents = require('../TableOfContents');

var _TableOfContents2 = _interopRequireDefault(_TableOfContents);

var _StyleGuide = require('./StyleGuide');

var _StyleGuide2 = _interopRequireDefault(_StyleGuide);

var _StyleGuideRenderer = require('./StyleGuideRenderer');

var _consts = require('../../consts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sections = [{
	components: [{
		name: 'Foo',
		pathLine: 'components/foo.js',
		filepath: 'components/foo.js',
		props: {
			description: 'Foo foo'
		}
	}, {
		name: 'Bar',
		pathLine: 'components/bar.js',
		filepath: 'components/bar.js',
		props: {
			description: 'Bar bar'
		}
	}]
}];
var config = {
	title: 'Hello',
	showSidebar: true
};

it('should render components list', function () {
	var actual = shallow(_react2.default.createElement(_StyleGuide2.default, {
		codeRevision: 1,
		config: config,
		sections: sections,
		allSections: sections,
		slots: {}
	}));

	expect(actual).toMatchSnapshot();
});

it('should render welcome screen', function () {
	var actual = shallow(_react2.default.createElement(_StyleGuide2.default, {
		codeRevision: 1,
		config: config,
		sections: [],
		allSections: [],
		slots: {},
		welcomeScreen: true
	}));

	expect(actual).toMatchSnapshot();
});

it('should render an error when componentDidCatch() is triggered', function () {
	var wrapper = shallow(_react2.default.createElement(_StyleGuide2.default, { codeRevision: 1, config: config, sections: [], allSections: [], slots: {} }));
	wrapper.instance().componentDidCatch({ toString: function toString() {
			return 'error';
		} }, { componentStack: { toString: function toString() {
				return 'info';
			} } });
	wrapper.update();
	expect(wrapper).toMatchSnapshot();
});

describe('sidebar rendering', function () {
	it('renderer should have sidebar if showSidebar is not set', function () {
		var wrapper = shallow(_react2.default.createElement(_StyleGuide2.default, {
			codeRevision: 1,
			config: config,
			sections: sections,
			allSections: sections,
			slots: {}
		}));

		expect(wrapper.prop('hasSidebar')).toEqual(true);
	});

	it('renderer should not have sidebar if showSidebar is false', function () {
		var wrapper = shallow(_react2.default.createElement(_StyleGuide2.default, {
			codeRevision: 1,
			config: _extends({}, config, {
				showSidebar: false
			}),
			sections: sections,
			allSections: sections,
			slots: {}
		}));

		expect(wrapper.prop('hasSidebar')).toEqual(false);
	});

	it('renderer should not have sidebar in isolation mode', function () {
		var wrapper = shallow(_react2.default.createElement(_StyleGuide2.default, {
			codeRevision: 1,
			config: config,
			sections: sections,
			allSections: sections,
			slots: {},
			displayMode: _consts.DisplayModes.component
		}));

		expect(wrapper.prop('hasSidebar')).toEqual(false);
	});

	it('renderer should have sidebar if pagePerSection is true', function () {
		var wrapper = shallow(_react2.default.createElement(_StyleGuide2.default, {
			codeRevision: 1,
			config: config,
			sections: sections,
			allSections: sections,
			slots: {},
			displayMode: _consts.DisplayModes.component,
			pagePerSection: true
		}));

		expect(wrapper.prop('hasSidebar')).toEqual(true);
	});
});

it('renderer should render logo, table of contents, ribbon and passed children', function () {
	var actual = shallow(_react2.default.createElement(
		_StyleGuideRenderer.StyleGuideRenderer,
		{
			classes: {},
			title: config.title,
			toc: _react2.default.createElement(_TableOfContents2.default, { sections: sections }),
			homepageUrl: 'http://react-styleguidist.js.org/',
			hasSidebar: true
		},
		_react2.default.createElement(
			'h1',
			null,
			'Content'
		)
	));

	expect(actual).toMatchSnapshot();
});