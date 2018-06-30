'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Playground = require('./Playground');

var _Playground2 = _interopRequireDefault(_Playground);

var _slots = require('../slots');

var _slots2 = _interopRequireDefault(_slots);

var _PlaygroundRenderer = require('./PlaygroundRenderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var evalInContext = function evalInContext(a) {
	return new Function('require', 'const React = require("react");' + a).bind(null, require);
}; // eslint-disable-line no-new-func
var reactCodeMirrorSelector = '.react-codemirror2';
var code = '<button>OK</button>';
var newCode = '<button>Not OK</button>';
var props = {
	index: 0,
	name: 'name',
	settings: {},
	evalInContext: evalInContext,
	code: code
};
var options = {
	context: {
		config: {
			showCode: false,
			highlightTheme: 'base16-light'
		},
		codeRevision: 0,
		slots: (0, _slots2.default)({})
	},
	childContextTypes: {
		slots: _propTypes2.default.object.isRequired,
		codeRevision: _propTypes2.default.number.isRequired
	}
};

it('should render component renderer', function () {
	var actual = shallow(_react2.default.createElement(_Playground2.default, props), options);

	expect(actual).toMatchSnapshot();
});

it('should update code via props', function () {
	var actual = shallow(_react2.default.createElement(_Playground2.default, props), options);

	expect(actual.state('code')).toEqual(code);

	actual.setProps({
		code: newCode
	});

	expect(actual.state('code')).toEqual(newCode);
});

it('should update code with debounce', function (done) {
	var actual = shallow(_react2.default.createElement(_Playground2.default, props), {
		context: _extends({}, options.context, {
			config: _extends({}, options.context.config, {
				previewDelay: 1
			})
		})
	});

	expect(actual.state('code')).toEqual(code);

	actual.instance().handleChange(newCode);

	expect(actual.state('code')).toEqual(code);
	setTimeout(function () {
		expect(actual.state('code')).toEqual(newCode);
		done();
	}, 3);
});

it('should open a code editor', function (done) {
	var actual = mount(_react2.default.createElement(_Playground2.default, props), options);

	expect(actual.find(reactCodeMirrorSelector)).toHaveLength(0);

	actual.find('button[name="' + _slots.EXAMPLE_TAB_CODE_EDITOR + '"]').simulate('click');

	setTimeout(function () {
		actual.update();
		expect(actual.find(reactCodeMirrorSelector)).toHaveLength(1);
		done();
	}, 1);
});

it('should not render a code editor if noeditor option passed in example settings', function () {
	var actual = mount(_react2.default.createElement(_Playground2.default, _extends({}, props, { settings: { noeditor: true } })), options);
	expect(actual.find('button[name="' + _slots.EXAMPLE_TAB_CODE_EDITOR + '"]')).toHaveLength(0);
});

it('should open a code editor by default if showcode=true option passed in example settings', function () {
	var actual = mount(_react2.default.createElement(_Playground2.default, _extends({}, props, { settings: { showcode: true } })), options);
	expect(actual.text()).toMatch('Loading');
});

it('should open a code editor by default if showCode=true option specified in style guide config', function () {
	var actual = mount(_react2.default.createElement(_Playground2.default, props), {
		context: _extends({}, options.context, {
			config: _extends({}, options.context.config, {
				showCode: true
			})
		}),
		childContextTypes: options.childContextTypes
	});
	expect(actual.text()).toMatch('Loading');
});

it('showcode option in example settings should overwrite style guide config option', function () {
	var actual = mount(_react2.default.createElement(_Playground2.default, _extends({}, props, { settings: { showcode: false } })), {
		context: _extends({}, options.context, {
			config: _extends({}, options.context.config, {
				showCode: true
			})
		}),
		childContextTypes: options.childContextTypes
	});
	expect(actual.text()).not.toMatch('Loading');
});

it('renderer should render preview', function () {
	var actual = shallow(_react2.default.createElement(_PlaygroundRenderer.PlaygroundRenderer, {
		classes: classes(_PlaygroundRenderer.styles),
		name: 'name',
		preview: _react2.default.createElement(
			'div',
			null,
			'preview'
		),
		previewProps: { className: 'pizza', title: 'salami' },
		tabButtons: _react2.default.createElement(
			'div',
			null,
			'tab buttons'
		),
		tabBody: _react2.default.createElement(
			'div',
			null,
			'tab body'
		),
		toolbar: _react2.default.createElement(
			'div',
			null,
			'toolbar'
		)
	}));

	expect(actual).toMatchSnapshot();
});