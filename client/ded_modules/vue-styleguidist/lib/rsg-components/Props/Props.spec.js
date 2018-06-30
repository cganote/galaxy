'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable react/prop-types */


exports.default = ColumnsRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropsRenderer = require('./PropsRenderer');

var _PropsRenderer2 = _interopRequireDefault(_PropsRenderer);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var parse = function parse() {};
var propsToArray = function propsToArray(props) {
	return Object.keys(props).map(function (name) {
		return _extends({}, props[name], { name: name });
	});
};

// Test renderers with clean readable snapshot diffs
function ColumnsRenderer(_ref) {
	var props = _ref.props;

	return _react2.default.createElement(
		'ul',
		null,
		props.map(function (row, rowIdx) {
			return _react2.default.createElement(
				'li',
				{ key: rowIdx },
				_PropsRenderer.columns.map(function (_ref2, colIdx) {
					var render = _ref2.render;
					return _react2.default.createElement(
						'div',
						{ key: colIdx },
						render(row)
					);
				})
			);
		})
	);
}

function render(propTypes) {
	var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	var props = parse('\n\t\timport { Component } from \'react\';\n\t\timport PropTypes from \'prop-types\';\n\t\texport default class Cmpnt extends Component {\n\t\t\tstatic propTypes = {\n\t\t\t\t' + propTypes.join(',') + '\n\t\t\t}\n\t\t\tstatic defaultProps = {\n\t\t\t\t' + defaultProps.join(',') + '\n\t\t\t}\n\t\t\trender() {\n\t\t\t}\n\t\t}\n\t');
	return shallow(_react2.default.createElement(ColumnsRenderer, { props: propsToArray(props.props) }));
}

function renderFlow(propsType) {
	var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	var props = parse('\n\t  // @flow\n\t\timport * as React from \'react\';\n\t\ttype Props = {\n\t\t\t' + propsType.join(',') + '\n\t\t};\n\t\texport default class Cmpnt extends React.Component<Props> {\n\t\t\tstatic defaultProps = {\n\t\t\t\t' + defaultProps.join(',') + '\n\t\t\t}\n\t\t\trender() {\n\t\t\t}\n\t\t}\n\t');
	return shallow(_react2.default.createElement(ColumnsRenderer, { props: propsToArray(props.props) }));
}

describe('PropsRenderer', function () {
	it('should render a table', function () {
		var actual = shallow(_react2.default.createElement(_PropsRenderer2.default, {
			props: [{ type: { name: 'string' }, required: false, description: '', name: 'color' }]
		}));

		expect(actual).toMatchSnapshot();
	});
});

describe('props columns', function () {
	it('should render PropTypes.string', function () {
		var actual = render(['color: PropTypes.string']);

		expect(actual).toMatchSnapshot();
	});

	it('should render PropTypes.string with a default value', function () {
		var actual = render(['color: PropTypes.string'], ['color: "pink"']);

		expect(actual).toMatchSnapshot();
	});

	it('should render PropTypes.string.isRequired', function () {
		var actual = render(['color: PropTypes.string.isRequired']);

		expect(actual).toMatchSnapshot();
	});

	it('should render PropTypes.arrayOf', function () {
		var actual = render(['colors: PropTypes.arrayOf(PropTypes.string)']);

		expect(actual).toMatchSnapshot();
	});

	it('should render PropTypes.arrayOf(PropTypes.shape)', function () {
		var actual = render(['foos: PropTypes.arrayOf(PropTypes.shape({bar: PropTypes.number, baz: PropTypes.any}))']);

		expect(actual).toMatchSnapshot();
	});

	it('should render PropTypes.instanceOf', function () {
		var actual = render(['num: PropTypes.instanceOf(Number)']);

		expect(actual).toMatchSnapshot();
	});

	it('should render PropTypes.shape', function () {
		var actual = render(['foo: PropTypes.shape({bar: PropTypes.number.isRequired, baz: PropTypes.any})']);

		expect(actual).toMatchSnapshot();
	});

	it('should render PropTypes.shape with formatted defaultProps', function () {
		var actual = render(['\n\t\t\t\tfoo: PropTypes.shape({\n\t\t\t\t\tbar: PropTypes.number.isRequired,\n\t\t\t\t\tbaz: PropTypes.any,\n\t\t\t\t})\n\t\t\t'], ['\n\t\t\t\tfoo: {\n\t\t\t\t\tbar: 123, baz() {\n\t\t\t\t\t\treturn \'foo\';\n\t\t\t\t\t},\n\t\t\t\t\tbing() {\n\t\t\t\t\t\treturn \'badaboom\';\n\t\t\t\t\t},\n\t\t\t\t\ttrotskij: () => 1935,\n\t\t\t\t\tqwarc: { si: \'se\xF1or\', },\n\t\t\t\t}\n\t\t\t']);

		expect(actual).toMatchSnapshot();
	});

	it('should render PropTypes.shape defaultProps, falling back to Object', function () {
		var actual = render(['\n\t\t\t\tfoo: PropTypes.shape({\n\t\t\t\t\tbar: PropTypes.number.isRequired,\n\t\t\t\t\tbaz: PropTypes.any,\n\t\t\t\t})\n\t\t\t'], ['\n\t\t\t\tfoo: somethingThatDoesntExist\n\t\t\t']);

		expect(actual).toMatchSnapshot();
	});

	it('should render PropTypes.shape with description', function () {
		var actual = render(['foo: PropTypes.shape({\n\t\t\t/**\n\t\t\t * Number\n\t\t\t */\n\t\t\tbar: PropTypes.number.isRequired,\n\t\t\t/** Any */\n\t\t\tbaz: PropTypes.any\n\t\t})']);

		expect(actual).toMatchSnapshot();
	});

	it('should render PropTypes.objectOf', function () {
		var actual = render(['colors: PropTypes.objectOf(PropTypes.string)']);

		expect(actual).toMatchSnapshot();
	});

	it('should render PropTypes.objectOf(PropTypes.shape)', function () {
		var actual = render(['colors: PropTypes.objectOf(\n\t\t\tPropTypes.shape({\n\t\t\t\tbar: PropTypes.number.isRequired,\n\t\t\t\tbaz: PropTypes.any\n\t\t\t})\n\t\t)']);

		expect(actual).toMatchSnapshot();
	});

	it('should render PropTypes.oneOf', function () {
		var actual = render(['size: PropTypes.oneOf(["small", "normal", "large"])']);

		expect(actual).toMatchSnapshot();
	});

	it('should render PropTypes.oneOfType', function () {
		var actual = render(['union: PropTypes.oneOfType([PropTypes.string, PropTypes.number])']);

		expect(actual).toMatchSnapshot();
	});

	it('should render description in Markdown', function () {
		var actual = render(['/**\n * Label\n */\ncolor: PropTypes.string']);

		expect(actual).toMatchSnapshot();
	});

	it('should render unknown proptype for a prop when a relevant proptype is not assigned', function () {
		var actual = render([], ['color: "pink"']);

		expect(actual).toMatchSnapshot();
	});

	it('should render function body in tooltip', function () {
		var actual = render(['fn: PropTypes.func'], ['fn: (e) => console.log(e)']);

		expect(actual).toMatchSnapshot();
	});

	it('should render function defaultValue as code when undefined', function () {
		var actual = render(['fn: PropTypes.func'], ['fn: undefined']);

		expect(actual).toMatchSnapshot();
	});

	it('should render function defaultValue as code when null', function () {
		var actual = render(['fn: PropTypes.func'], ['fn: null']);

		expect(actual).toMatchSnapshot();
	});

	it('should render arguments from JsDoc tags', function () {
		var props = [{
			name: 'size',
			type: {
				name: 'number'
			},
			required: false,
			description: 'Test description',
			tags: {
				arg: [{
					name: 'Foo',
					description: 'Converts foo to bar',
					type: { name: 'Array' }
				}],
				param: [{
					name: 'Bar'
				}]
			}
		}];
		var actual = shallow(_react2.default.createElement(ColumnsRenderer, { props: props }));

		expect(actual).toMatchSnapshot();
	});

	it('should render return from JsDoc tags', function () {
		var getProps = function getProps(tag) {
			return [{
				name: 'size',
				type: {
					name: 'number'
				},
				required: false,
				description: 'Test description',
				tags: _defineProperty({}, tag, [{
					title: 'Foo',
					description: 'Returns foo from bar',
					type: { name: 'Array' }
				}])
			}];
		};

		var actualForReturn = shallow(_react2.default.createElement(ColumnsRenderer, { props: getProps('return') }));

		expect(actualForReturn).toMatchSnapshot();

		var actualForReturns = shallow(_react2.default.createElement(ColumnsRenderer, { props: getProps('returns') }));

		expect(actualForReturns).toMatchSnapshot();
	});

	it('should render name as deprecated when tag deprecated is present', function () {
		var props = [{
			name: 'size',
			type: {
				name: 'number'
			},
			required: false,
			description: 'Test description',
			tags: {
				deprecated: [{
					title: 'deprecated',
					description: 'Do not use.'
				}]
			}
		}];
		var actual = shallow(_react2.default.createElement(ColumnsRenderer, { props: props }));

		expect(actual).toMatchSnapshot();
	});

	it('should render type string', function () {
		var actual = renderFlow(['foo: string']);

		expect(actual).toMatchSnapshot();
	});

	it('should render optional type string', function () {
		var actual = renderFlow(['foo?: string']);

		expect(actual).toMatchSnapshot();
	});

	it('should render type string with a default value', function () {
		var actual = renderFlow(['foo?: string'], ['foo: "bar"']);

		expect(actual).toMatchSnapshot();
	});

	it('should render literal type', function () {
		var actual = renderFlow(['foo?: "bar"']);

		expect(actual).toMatchSnapshot();
	});

	it('should render object type with body in tooltip', function () {
		var actual = renderFlow(['foo: { bar: string }']);

		expect(actual).toMatchSnapshot();
	});

	it('should render function type with body in tooltip', function () {
		var actual = renderFlow(['foo: () => void']);

		expect(actual).toMatchSnapshot();
	});

	it('should render union type with body in tooltip', function () {
		var actual = renderFlow(['foo: "bar" | number']);

		expect(actual).toMatchSnapshot();
	});

	it('should render tuple type with body in tooltip', function () {
		var actual = renderFlow(['foo: ["bar", number]']);

		expect(actual).toMatchSnapshot();
	});

	it('should render custom class type', function () {
		var actual = renderFlow(['foo: React.ReactNode']);

		expect(actual).toMatchSnapshot();
	});
});

describe('unquote', function () {
	it('should remove double quotes around the string', function () {
		var result = (0, _util.unquote)('"foo"');
		expect(result).toBe('foo');
	});

	it('should remove single quotes around the string', function () {
		var result = (0, _util.unquote)("'foo'");
		expect(result).toBe('foo');
	});

	it('should not remove quotes in the middle of the string', function () {
		var result = (0, _util.unquote)('foo"bar');
		expect(result).toBe('foo"bar');
	});
});

describe('getType', function () {
	it('should return .type or .flowType property', function () {
		var result = (0, _util.getType)({
			type: 'foo',
			flowType: 'bar'
		});
		expect(result).toBe('bar');
	});
});

describe('showSpaces', function () {
	it('should replace leading and trailing spaces with a visible character', function () {
		var result = (0, _util.showSpaces)(' pizza ');
		expect(result).toBe('␣pizza␣');
	});
});

describe('getRowKey', function () {
	it('should return type name', function () {
		var result = (0, _PropsRenderer.getRowKey)({ name: 'number' });
		expect(result).toBe('number');
	});
});