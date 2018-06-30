'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EditorLoaderRenderer = require('./EditorLoaderRenderer');

var _Editor = require('./Editor');

var _Editor2 = _interopRequireDefault(_Editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var code = '<button>MyAwesomeCode</button>';
var newCode = '<button>MyNewAwesomeCode</button>';
var options = {
	context: {
		config: {
			showCode: false,
			highlightTheme: 'base16-light',
			editorConfig: {
				mode: 'js'
			}
		}
	},
	childContextTypes: {
		config: _propTypes2.default.object.isRequired
	}
};

describe('EditorLoaderRenderer', function () {
	it('should renderer should render loader', function () {
		var actual = shallow(_react2.default.createElement(_EditorLoaderRenderer.EditorLoaderRenderer, { classes: {} }));

		expect(actual).toMatchSnapshot();
	});
});

describe('Editor', function () {
	it('should renderer and editor', function () {
		var actual = shallow(_react2.default.createElement(_Editor2.default, { code: code, onChange: function onChange() {} }), options);

		expect(actual).toMatchSnapshot();
	});

	it('should update code with debounce', function (done) {
		var onChange = jest.fn();
		var actual = mount(_react2.default.createElement(_Editor2.default, { code: code, onChange: onChange }), options);

		expect(actual.text()).toMatch(code);

		// Set new value by calling a method on the CodeMirror instance
		actual.find('div').getDOMNode().querySelector('.CodeMirror').CodeMirror.setValue(newCode);

		setTimeout(function () {
			expect(onChange).toBeCalledWith(newCode);
			done();
		}, 13);
	});
});