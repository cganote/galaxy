'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

var _TableOfContents = require('./TableOfContents');

var _TableOfContents2 = _interopRequireDefault(_TableOfContents);

var _TableOfContentsRenderer = require('./TableOfContentsRenderer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = [{
	name: 'Button',
	slug: 'button'
}, {
	name: 'Input',
	slug: 'input'
}, {
	name: 'Textarea',
	slug: 'textarea'
}];

var sections = [{
	name: 'Introduction',
	slug: 'introduction',
	content: 'intro.md'
}, {
	name: 'Buttons',
	slug: 'buttons',
	components: [{
		name: 'Button',
		slug: 'button'
	}]
}, {
	name: 'Forms',
	slug: 'forms',
	components: [{
		name: 'Input',
		slug: 'input'
	}, {
		name: 'Textarea',
		slug: 'textarea'
	}]
}];

it('should render a renderer', function () {
	var actual = shallow(_react2.default.createElement(_TableOfContents2.default, { sections: [{ components: components }] }));

	expect(actual).toMatchSnapshot();
});

it('should render renderer with sections with nested components', function () {
	var actual = shallow(_react2.default.createElement(_TableOfContents2.default, { sections: sections }));

	expect(actual).toMatchSnapshot();
});

it('should filter list when search field contains a query', function () {
	var searchTerm = 'but';
	var actual = shallow(_react2.default.createElement(_TableOfContents2.default, { sections: [{ components: components }] }));

	expect(actual).toMatchSnapshot();

	actual.setState({ searchTerm: searchTerm });

	expect(actual).toMatchSnapshot();
});

it('should filter section names', function () {
	var searchTerm = 'frm';
	var actual = shallow(_react2.default.createElement(_TableOfContents2.default, { sections: sections }));

	expect(actual).toMatchSnapshot();

	actual.setState({ searchTerm: searchTerm });

	expect(actual).toMatchSnapshot();
});

it('renderer should render table of contents', function () {
	var searchTerm = 'foo';
	var actual = shallow(_react2.default.createElement(_TableOfContentsRenderer.TableOfContentsRenderer, {
		classes: {},
		items: _react2.default.createElement(
			'div',
			null,
			'foo'
		),
		searchTerm: searchTerm,
		onSearchTermChange: _noop2.default
	}));

	expect(actual).toMatchSnapshot();
});

it('should call a callback when input value changed', function () {
	var onSearchTermChange = jest.fn();
	var searchTerm = 'foo';
	var newSearchTerm = 'bar';
	var actual = shallow(_react2.default.createElement(_TableOfContentsRenderer.TableOfContentsRenderer, {
		classes: {},
		items: _react2.default.createElement(
			'div',
			null,
			'foo'
		),
		searchTerm: searchTerm,
		onSearchTermChange: onSearchTermChange
	}));

	actual.find('input').simulate('change', {
		target: {
			value: newSearchTerm
		}
	});

	expect(onSearchTermChange).toBeCalledWith(newSearchTerm);
});