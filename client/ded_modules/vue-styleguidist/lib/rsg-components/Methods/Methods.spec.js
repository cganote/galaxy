'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = ColumnsRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDocgen = require('react-docgen');

var _MethodsRenderer = require('./MethodsRenderer');

var _MethodsRenderer2 = _interopRequireDefault(_MethodsRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Test renderers with clean readable snapshot diffs
// eslint-disable-next-line react/prop-types
function ColumnsRenderer(_ref) {
	var methods = _ref.methods;

	return _react2.default.createElement(
		'ul',
		null,
		methods.map(function (row, rowIdx) {
			return _react2.default.createElement(
				'li',
				{ key: rowIdx },
				_MethodsRenderer.columns.map(function (_ref2, colIdx) {
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
} /* eslint-disable */


function render(methods) {
	var parsed = (0, _reactDocgen.parse)('\n\t\timport { Component } from \'react\';\n\t\texport default class Cmpnt extends Component {\n\t\t\t' + methods.join('\n') + '\n\t\t\trender() {\n\t\t\t}\n\t\t}\n\t');
	return shallow(_react2.default.createElement(ColumnsRenderer, { methods: parsed.methods }));
}

describe('MethodsRenderer', function () {
	it('should render a table', function () {
		var actual = shallow(_react2.default.createElement(_MethodsRenderer2.default, {
			methods: [{
				name: 'method',
				modifiers: [],
				params: [],
				description: 'Public'
			}]
		}));

		expect(actual).toMatchSnapshot();
	});
});

describe('PropsRenderer', function () {
	it('should render public method', function () {
		var actual = render(['/**\n * Public\n * @public\n */\nmethod() {}']);

		expect(actual).toMatchSnapshot();
	});

	it('should render parameters', function () {
		var actual = render(['/**\n * Public\n * @public\n * @param {Number} value - Description\n */\nmethod(value) {}']);

		expect(actual).toMatchSnapshot();
	});

	it('should render returns', function () {
		var actual = render(['/**\n * @public\n * @returns {Number} - Description\n */\nmethod() {}']);

		expect(actual).toMatchSnapshot();
	});

	it('should render JsDoc tags', function () {
		var actual = shallow(_react2.default.createElement(ColumnsRenderer, {
			methods: [{
				name: 'Foo',
				tags: {
					since: [{
						title: 'since',
						description: '1.0.0'
					}]
				}
			}]
		}));

		expect(actual).toMatchSnapshot();
	});

	it('should render deprecated JsDoc tags', function () {
		var actual = shallow(_react2.default.createElement(ColumnsRenderer, {
			methods: [{
				name: 'Foo',
				tags: {
					deprecated: [{
						title: 'description',
						description: 'Use *another* method'
					}]
				}
			}]
		}));

		expect(actual).toMatchSnapshot();
	});
});