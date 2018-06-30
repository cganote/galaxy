'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _SectionHeadingRenderer = require('./SectionHeadingRenderer');

var _SectionHeadingRenderer2 = _interopRequireDefault(_SectionHeadingRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SectionHeading', function () {
	var FakeToolbar = function FakeToolbar() {
		return _react2.default.createElement(
			'div',
			null,
			'Fake toolbar'
		);
	};

	it('should forward slot properties to the toolbar', function () {
		var actual = shallow(_react2.default.createElement(
			_index2.default,
			{ id: 'section', slotName: 'slot', slotProps: { foo: 1, bar: 'baz' }, depth: 2 },
			'A Section'
		));

		expect(actual).toMatchSnapshot();
	});

	it('should render a section heading', function () {
		var actual = shallow(_react2.default.createElement(
			_SectionHeadingRenderer2.default,
			{ id: 'section', href: '/section', depth: 2, toolbar: _react2.default.createElement(FakeToolbar, null) },
			'A Section'
		));

		expect(actual.dive()).toMatchSnapshot();
	});

	it('should render a deprecated section heading', function () {
		var actual = shallow(_react2.default.createElement(
			_SectionHeadingRenderer2.default,
			{
				id: 'section',
				href: '/section',
				depth: 2,
				toolbar: _react2.default.createElement(FakeToolbar, null),
				deprecated: true
			},
			'A Section'
		));

		expect(actual.dive()).toMatchSnapshot();
	});

	it('should prevent the heading level from exceeding the maximum allowed by the Heading component', function () {
		var actual = shallow(_react2.default.createElement(
			_SectionHeadingRenderer2.default,
			{ id: 'section', href: '/section', depth: 7, toolbar: _react2.default.createElement(FakeToolbar, null) },
			'A Section'
		));

		expect(actual.dive().find('Styled(Heading)').prop('level')).toEqual(6);
	});
});