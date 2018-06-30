'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _clipboardCopy = require('clipboard-copy');

var _clipboardCopy2 = _interopRequireDefault(_clipboardCopy);

var _PathlineRenderer = require('./PathlineRenderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('clipboard-copy');

var pathline = 'foo/bar';
var props = {
	classes: classes(_PathlineRenderer.styles)
};

it('renderer should a path line', function () {
	var actual = shallow(_react2.default.createElement(
		_PathlineRenderer.PathlineRenderer,
		props,
		pathline
	));
	expect(actual).toMatchSnapshot();
});

test('should copy text on click', function () {
	var actual = mount(_react2.default.createElement(
		_PathlineRenderer.PathlineRenderer,
		props,
		pathline
	));
	actual.find('button').simulate('click');
	expect(_clipboardCopy2.default).toBeCalledWith(pathline);
});