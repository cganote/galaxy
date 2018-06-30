'use strict';

var _splitExampleCode = require('../splitExampleCode');

var _splitExampleCode2 = _interopRequireDefault(_splitExampleCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('splitExampleCode', function () {
	test('basic example', function () {
		var result = (0, _splitExampleCode2.default)('var a = 1;\nReact.createElement(\'i\', null, a);');
		expect(result).toEqual({
			head: 'var a = 1',
			example: 'var a = 1;\nreturn (React.createElement(\'i\', null, a));'
		});
	});

	test('initialState', function () {
		var result = (0, _splitExampleCode2.default)('initialState = {a: 1};\nReact.createElement(\'i\', null, state.a);');
		expect(result).toEqual({
			head: 'initialState = {a: 1}',
			example: 'initialState = {a: 1};\nreturn (React.createElement(\'i\', null, state.a));'
		});
	});

	test('JSX not only in the last expression', function () {
		var result = (0, _splitExampleCode2.default)('function Wrapper(ref) {\n\tvar children = ref.children;\n\treturn React.createElement(\'div\', {id: \'foo\'}, children);\n}\n\n;React.createElement(Wrapper, null,\n\tReact.createElement(Wrapper, null, React.createElement(Icon, {name: "plus"})),\n\tReact.createElement(Wrapper, null, React.createElement(Icon, {name: "clip"}))\n)');
		expect(result).toEqual({
			example: 'function Wrapper(ref) {\n\tvar children = ref.children;\n\treturn React.createElement(\'div\', {id: \'foo\'}, children);\n}\n\n;\nreturn (React.createElement(Wrapper, null,\n\tReact.createElement(Wrapper, null, React.createElement(Icon, {name: "plus"})),\n\tReact.createElement(Wrapper, null, React.createElement(Icon, {name: "clip"}))\n));',
			head: 'function Wrapper(ref) {\n\tvar children = ref.children;\n\treturn React.createElement(\'div\', {id: \'foo\'}, children);\n}\n\n'
		});
	});

	test('single expression', function () {
		var result = (0, _splitExampleCode2.default)('pizza');
		expect(result).toEqual({
			head: '',
			example: ';\nreturn (pizza);'
		});
	});

	test('empty string', function () {
		var result = (0, _splitExampleCode2.default)('');
		expect(result).toEqual({
			head: '',
			example: ''
		});
	});

	test('comment', function () {
		var result = (0, _splitExampleCode2.default)('/* ~ */');
		expect(result).toEqual({
			head: '',
			example: '/* ~ */'
		});
	});

	test('error', function () {
		var result = (0, _splitExampleCode2.default)('?');
		expect(result).toEqual({
			head: '',
			example: '?'
		});
	});
});