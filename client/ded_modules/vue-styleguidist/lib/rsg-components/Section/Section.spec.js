'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

var _Examples = require('../Examples');

var _Examples2 = _interopRequireDefault(_Examples);

var _Components = require('../Components');

var _Components2 = _interopRequireDefault(_Components);

var _Sections = require('../Sections');

var _Sections2 = _interopRequireDefault(_Sections);

var _Section = require('./Section');

var _Section2 = _interopRequireDefault(_Section);

var _SectionRenderer = require('./SectionRenderer');

var _consts = require('../../consts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
	context: {
		displayMode: _consts.DisplayModes.all
	}
};

var section = {
	name: 'Foo',
	slug: 'foo',
	description: 'This is a description',
	content: [{
		type: 'code',
		content: '<button>OK</button>',
		evalInContext: _noop2.default
	}, {
		type: 'markdown',
		content: 'Hello *world*!'
	}],
	components: [],
	sections: []
};

it('should render section renderer', function () {
	var actual = shallow(_react2.default.createElement(_Section2.default, { section: section, depth: 3 }), options);

	expect(actual).toMatchSnapshot();
});

it('should render components list', function () {
	var actual = shallow(_react2.default.createElement(_Section2.default, {
		section: {
			name: 'Components',
			slug: 'components',
			components: []
		},
		depth: 3
	}), options);

	expect(actual).toMatchSnapshot();
});

it('should not render components list if not defined', function () {
	var actual = shallow(_react2.default.createElement(_Section2.default, {
		section: {
			name: 'No components',
			slug: 'no-components'
		},
		depth: 3
	}), options);

	expect(actual).toMatchSnapshot();
});

it('should render sections if defined', function () {
	var actual = shallow(_react2.default.createElement(_Section2.default, {
		section: {
			name: 'Nested sections',
			slug: 'nested-sections',
			sections: []
		},
		depth: 3
	}), options);

	expect(actual).toMatchSnapshot();
});

it('should not render sections if not defined', function () {
	var actual = shallow(_react2.default.createElement(_Section2.default, {
		section: {
			name: 'No sections',
			slug: 'no-sections'
		},
		depth: 3
	}), options);

	expect(actual).toMatchSnapshot();
});

test('should not render section in isolation mode by default', function () {
	var actual = shallow(_react2.default.createElement(_Section2.default, {
		section: {
			name: 'A',
			slug: 'a'
		},
		depth: 3
	}), options);

	expect(actual.prop('isolated')).toBeFalsy();
});

test('should render section in isolation mode', function () {
	var actual = shallow(_react2.default.createElement(_Section2.default, {
		section: {
			name: 'A',
			slug: 'a'
		},
		depth: 3
	}), {
		context: _extends({}, options.context, {
			displayMode: _consts.DisplayModes.section
		})
	});

	expect(actual.prop('isolated')).toBeTruthy();
});

it('render should render section', function () {
	var actual = shallow(_react2.default.createElement(_SectionRenderer.SectionRenderer, {
		classes: {},
		name: section.name,
		slug: section.slug,
		content: _react2.default.createElement(_Examples2.default, { name: section.name, examples: section.content }),
		components: _react2.default.createElement(_Components2.default, { components: [], depth: 3 }),
		sections: _react2.default.createElement(_Sections2.default, { sections: [], depth: 3 }),
		depth: 3
	}), options);

	expect(actual).toMatchSnapshot();
});

it('render should not render title if name is not set', function () {
	var actual = shallow(_react2.default.createElement(_SectionRenderer.SectionRenderer, { classes: {}, depth: 3 }), options);

	expect(actual).toMatchSnapshot();
});

it('render should render title if name is set', function () {
	var actual = shallow(_react2.default.createElement(_SectionRenderer.SectionRenderer, { classes: {}, name: 'test', slug: 'test', depth: 3 }), options);

	expect(actual).toMatchSnapshot();
});