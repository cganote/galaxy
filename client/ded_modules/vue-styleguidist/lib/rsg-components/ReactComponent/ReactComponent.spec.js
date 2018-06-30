'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slots = require('../slots');

var _slots2 = _interopRequireDefault(_slots);

var _ReactComponent = require('./ReactComponent');

var _ReactComponent2 = _interopRequireDefault(_ReactComponent);

var _ReactComponentRenderer = require('./ReactComponentRenderer');

var _consts = require('../../consts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
	context: {
		config: {
			showUsage: false
		},
		displayMode: _consts.DisplayModes.all,
		slots: _slots2.default
	},
	metadata: {}
};

var component = {
	name: 'Foo',
	slug: 'foo',
	pathLine: 'foo/bar.js',
	props: {
		description: 'Bar',
		methods: [],
		examples: []
	},
	metadata: {}
};
var componentWithEverything = {
	name: 'Foo',
	slug: 'foo',
	pathLine: 'foo/bar.js',
	props: {
		description: 'Bar',
		methods: [{
			name: 'set',
			params: [{
				name: 'newValue',
				description: 'New value for the counter.',
				type: { name: 'Number' }
			}],
			returns: null,
			description: 'Sets the counter to a particular value.'
		}],
		examples: [{
			type: 'code',
			content: '<button>OK</button>',
			evalInContext: function evalInContext() {}
		}, {
			type: 'markdown',
			content: 'Hello *world*!'
		}]
	},
	metadata: {
		tags: ['one', 'two']
	}
};

describe('ReactComponent', function () {
	it('should render an example placeholder', function () {
		var actual = shallow(_react2.default.createElement(_ReactComponent2.default, { component: component, depth: 3 }), options);

		var props = actual.prop('examples').props;
		expect(props.name).toBeTruthy();
		expect(props.examples).toBeFalsy();
	});

	it('should render examples', function () {
		var actual = shallow(_react2.default.createElement(_ReactComponent2.default, { component: componentWithEverything, depth: 3 }), options);

		var props = actual.prop('examples').props;
		expect(props.name).toBeTruthy();
		expect(props.examples).toBeTruthy();
	});

	it('should pass rendered description, usage, examples, etc. to the renderer', function () {
		var actual = shallow(_react2.default.createElement(_ReactComponent2.default, { component: componentWithEverything, depth: 3 }), options);

		expect(actual).toMatchSnapshot();
	});

	it('should render usage closed by default when showUsage config options is false', function () {
		var actual = shallow(_react2.default.createElement(_ReactComponent2.default, { component: componentWithEverything, depth: 3 }), options);

		expect(actual.prop('tabButtons').props.active).toBeFalsy();
		expect(actual.prop('tabBody').props.active).toBeFalsy();
	});

	it('should render usage opened by default when showUsage config options is true', function () {
		var actual = shallow(_react2.default.createElement(_ReactComponent2.default, { component: componentWithEverything, depth: 3 }), _extends({}, options, {
			context: {
				config: {
					showUsage: true
				}
			}
		}));

		expect(actual.prop('tabButtons').props.active).toBe(_slots.DOCS_TAB_USAGE);
		expect(actual.prop('tabBody').props.active).toBe(_slots.DOCS_TAB_USAGE);
	});

	it('should return null when component has no name', function () {
		var actual = shallow(_react2.default.createElement(_ReactComponent2.default, { component: { slug: 'foo', props: {} }, depth: 3 }), options);

		expect(actual.getElement()).toBe(null);
	});

	test('should not render component in isolation mode by default', function () {
		var actual = shallow(_react2.default.createElement(_ReactComponent2.default, { component: component, depth: 3 }), options);

		expect(actual.prop('heading').props.slotProps.isolated).toBeFalsy();
	});

	test('should render component in isolation mode', function () {
		var actual = shallow(_react2.default.createElement(_ReactComponent2.default, { component: component, depth: 3 }), {
			context: _extends({}, options.context, {
				displayMode: _consts.DisplayModes.component
			})
		});

		expect(actual.prop('heading').props.slotProps.isolated).toBeTruthy();
	});

	it('should pass depth to heading', function () {
		var actual = shallow(_react2.default.createElement(_ReactComponent2.default, { component: component, depth: 3 }), options);

		expect(actual.prop('heading').props.depth).toBe(3);
	});

	it('should not render heading as deprecated by default', function () {
		var actual = shallow(_react2.default.createElement(_ReactComponent2.default, { component: component, depth: 3 }), options);

		expect(actual.prop('heading').props.deprecated).toBeFalsy();
	});

	it('should render heading as deprecated when @deprecated is present in tags', function () {
		var actual = shallow(_react2.default.createElement(_ReactComponent2.default, {
			component: _extends({}, component, {
				props: {
					tags: {
						deprecated: [{
							title: 'deprecated',
							description: 'I am deprecated'
						}]
					}
				}
			}),
			depth: 3
		}), options);

		expect(actual.prop('heading').props.deprecated).toBeTruthy();
	});
});

describe('ReactComponentRenderer', function () {
	var props = {
		classes: {},
		name: 'Test',
		slug: 'test',
		pathLine: 'components/test',
		heading: _react2.default.createElement(
			'div',
			null,
			'heading'
		)
	};

	test('should render component', function () {
		var actual = shallow(_react2.default.createElement(_ReactComponentRenderer.ReactComponentRenderer, props));

		expect(actual).toMatchSnapshot();
	});

	test('should render component without a pathline', function () {
		var actual = shallow(_react2.default.createElement(_ReactComponentRenderer.ReactComponentRenderer, _extends({}, props, { pathLine: '' })));

		expect(actual).toMatchSnapshot();
	});

	test('should render usage section', function () {
		var actual = shallow(_react2.default.createElement(_ReactComponentRenderer.ReactComponentRenderer, _extends({}, props, {
			tabButtons: _react2.default.createElement(
				'div',
				null,
				'tab buttons'
			),
			tabBody: _react2.default.createElement(
				'div',
				null,
				'tab body'
			)
		})));

		expect(actual).toMatchSnapshot();
	});

	test('should render description', function () {
		var actual = shallow(_react2.default.createElement(_ReactComponentRenderer.ReactComponentRenderer, _extends({}, props, { description: _react2.default.createElement(
				'div',
				null,
				'description'
			) })));

		expect(actual).toMatchSnapshot();
	});

	test('should render docs', function () {
		var actual = shallow(_react2.default.createElement(_ReactComponentRenderer.ReactComponentRenderer, _extends({}, props, { docs: _react2.default.createElement(
				'div',
				null,
				'docs'
			) })));

		expect(actual).toMatchSnapshot();
	});

	test('should render examples', function () {
		var actual = shallow(_react2.default.createElement(_ReactComponentRenderer.ReactComponentRenderer, _extends({}, props, {
			examples: [_react2.default.createElement(
				'div',
				{ key: 1 },
				'example 1'
			), _react2.default.createElement(
				'div',
				{ key: 2 },
				'example 2'
			)]
		})));

		expect(actual).toMatchSnapshot();
	});
});