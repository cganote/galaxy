'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IsolateButton = require('./IsolateButton');

var _IsolateButton2 = _interopRequireDefault(_IsolateButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('should renderer a link to isolated mode', function () {
	var actual = shallow(_react2.default.createElement(_IsolateButton2.default, { name: 'Pizza' }));

	expect(actual).toMatchSnapshot();
});

it('should renderer a link to example isolated mode', function () {
	var actual = shallow(_react2.default.createElement(_IsolateButton2.default, { name: 'Pizza', example: 3 }));

	expect(actual).toMatchSnapshot();
});

it('should renderer a link home in isolated mode', function () {
	var actual = shallow(_react2.default.createElement(_IsolateButton2.default, { name: 'Pizza', isolated: true }));

	expect(actual).toMatchSnapshot();
});