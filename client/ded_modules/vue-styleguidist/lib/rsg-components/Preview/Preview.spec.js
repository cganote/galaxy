'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Preview = require('../Preview');

var _Preview2 = _interopRequireDefault(_Preview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */

var evalInContext = function evalInContext(a) {
	return (
		// eslint-disable-next-line no-new-func
		new Function('require', 'state', 'setState', 'const React = require("react");' + a).bind(null, require)
	);
};
var code = '<button>OK</button>';
var options = {
	context: {
		config: {
			compilerConfig: {}
		},
		codeRevision: 0
	}
};

var console$error = console.error;
var console$clear = console.clear;

afterEach(function () {
	console.error = console$error;
	console.clear = console$clear;
});

it('should unmount Wrapper component', function () {
	var actual = mount(_react2.default.createElement(_Preview2.default, { code: code, evalInContext: evalInContext }), options);

	expect(actual.html()).toMatch('<button');
	actual.unmount();
	expect(actual.html()).toBe(null);
});

it('should not not fail when Wrapper wasn’t mounted', function () {
	console.error = jest.fn();

	var actual = mount(_react2.default.createElement(_Preview2.default, { code: 'pizza', evalInContext: evalInContext }), options);
	var node = actual.instance().mountNode;

	expect(console.error).toHaveBeenCalled();
	expect(node.innerHTML).toBe('');
	actual.unmount();
	expect(node.innerHTML).toBe('');
});

it('should wrap code in Fragment when it starts with <', function () {
	console.error = jest.fn();

	var actual = mount(_react2.default.createElement(_Preview2.default, { code: '<span /><span />', evalInContext: evalInContext }), options);

	// If two spans weren't wrapped in a Fragment, we'd see an error in console
	expect(console.error).not.toHaveBeenCalled();
	expect(actual.html()).toMatchSnapshot();
});

it('should render component renderer', function () {
	var actual = shallow(_react2.default.createElement(_Preview2.default, { code: code, evalInContext: evalInContext }), _extends({}, options, {
		disableLifecycleMethods: true
	}));

	expect(actual).toMatchSnapshot();
});

it('should not clear console on initial mount', function () {
	console.clear = jest.fn();
	mount(_react2.default.createElement(_Preview2.default, { code: code, evalInContext: evalInContext }), options);
	expect(console.clear).toHaveBeenCalledTimes(0);
});

it('should clear console on second mount', function () {
	console.clear = jest.fn();
	mount(_react2.default.createElement(_Preview2.default, { code: code, evalInContext: evalInContext }), {
		context: _extends({}, options.context, { codeRevision: 1 })
	});
	expect(console.clear).toHaveBeenCalledTimes(1);
});

it('should set initialState before the first render', function () {
	var code = '\ninitialState = {count:1};\n<span>{state.count}</span>\n\t';
	var actual = mount(_react2.default.createElement(_Preview2.default, { code: code, evalInContext: evalInContext }), options);
	expect(actual.html()).toMatchSnapshot();
});

it('should update state on setState', function (done) {
	var code = '\ninitialState = {count:1};\nsetTimeout(() => state.count === 1 && setState({count:2}));\n<button>{state.count}</button>\n\t';
	var actual = mount(_react2.default.createElement(_Preview2.default, { code: code, evalInContext: evalInContext }), options);

	actual.instance().mountNode.querySelector('button').click();

	setTimeout(function () {
		try {
			expect(actual.html()).toMatchSnapshot();
			done();
		} catch (err) {
			done.fail(err);
		}
	});
});