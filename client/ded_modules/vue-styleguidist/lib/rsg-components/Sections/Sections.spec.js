'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

var _Section = require('../Section');

var _Section2 = _interopRequireDefault(_Section);

var _Sections = require('./Sections');

var _Sections2 = _interopRequireDefault(_Sections);

var _SectionsRenderer = require('./SectionsRenderer');

var _SectionsRenderer2 = _interopRequireDefault(_SectionsRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sections = [{
	name: 'Foo',
	content: [{
		type: 'code',
		content: '<button>OK</button>',
		evalInContext: _noop2.default
	}],
	components: []
}, {
	name: 'Bar',
	content: [{
		type: 'markdown',
		content: 'Hello *world*!'
	}],
	components: []
}, {
	sections: [{
		name: 'One',
		content: []
	}, {
		name: 'Two',
		content: []
	}]
}];

it('should render component renderer', function () {
	var actual = shallow(_react2.default.createElement(_Sections2.default, { sections: sections, depth: 3 }));

	expect(actual).toMatchSnapshot();
});

it('render should render styled component', function () {
	var actual = shallow(_react2.default.createElement(
		_SectionsRenderer2.default,
		{ classes: {} },
		_react2.default.createElement(_Section2.default, { key: 0, section: sections[0], depth: 3 }),
		_react2.default.createElement(_Section2.default, { key: 1, section: sections[1], depth: 3 }),
		_react2.default.createElement(_Section2.default, { key: 2, section: sections[2], depth: 3 })
	));

	expect(actual).toMatchSnapshot();
});

it('render should render component', function () {
	var actual = shallow(_react2.default.createElement(
		_SectionsRenderer.SectionsRenderer,
		{ classes: {} },
		_react2.default.createElement(_Section2.default, { key: 0, section: sections[0], depth: 3 }),
		_react2.default.createElement(_Section2.default, { key: 1, section: sections[1], depth: 3 }),
		_react2.default.createElement(_Section2.default, { key: 2, section: sections[2], depth: 3 })
	));

	expect(actual).toMatchSnapshot();
});