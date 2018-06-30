'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

var _Examples = require('../Examples');

var _Examples2 = _interopRequireDefault(_Examples);

var _consts = require('../../consts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var examples = [{
	type: 'code',
	content: '<button>OK</button>',
	evalInContext: _noop2.default
}, {
	type: 'markdown',
	content: 'Hello *world*!'
}];

it('should render examples', function () {
	var actual = shallow(_react2.default.createElement(_Examples2.default, { examples: examples, name: 'button' }), {
		context: {
			codeRevision: 1,
			displayMode: _consts.DisplayModes.example
		}
	});

	expect(actual).toMatchSnapshot();
});

it('should not render a example with unknown type', function () {
	var faultyExample = [{
		type: 'unknown',
		content: 'FooBar'
	}];

	var actual = mount(_react2.default.createElement(_Examples2.default, { examples: faultyExample, name: 'button' }), {
		context: {
			codeRevision: 1
		}
	});
	var article = actual.find('article');
	expect(article.length).toEqual(1);
	expect(article.text().includes('FooBar')).toEqual(false);
});