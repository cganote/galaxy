'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ExamplePlaceholderRenderer = require('./ExamplePlaceholderRenderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('should render a link', function () {
	var actual = shallow(_react2.default.createElement(_ExamplePlaceholderRenderer.ExamplePlaceholderRenderer, { classes: {}, name: 'Pizza' }));

	expect(actual).toMatchSnapshot();
});

it('should render an example placeholder after click', function () {
	var actual = shallow(_react2.default.createElement(_ExamplePlaceholderRenderer.ExamplePlaceholderRenderer, { classes: {}, name: 'Pizza' }));

	actual.find('button').simulate('click');

	expect(actual).toMatchSnapshot();
});