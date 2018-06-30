'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SectionRenderer = SectionRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Styled = require('rsg-components/Styled');

var _Styled2 = _interopRequireDefault(_Styled);

var _SectionHeading = require('rsg-components/SectionHeading');

var _SectionHeading2 = _interopRequireDefault(_SectionHeading);

var _Markdown = require('rsg-components/Markdown');

var _Markdown2 = _interopRequireDefault(_Markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(_ref) {
	var space = _ref.space;
	return {
		root: {
			marginBottom: space[4]
		}
	};
};

function SectionRenderer(allProps) {
	var classes = allProps.classes,
	    name = allProps.name,
	    slug = allProps.slug,
	    content = allProps.content,
	    components = allProps.components,
	    sections = allProps.sections,
	    collection = allProps.collection,
	    depth = allProps.depth,
	    description = allProps.description,
	    nameParent = allProps.nameParent,
	    level = allProps.level;


	return _react2.default.createElement(
		'section',
		{ className: classes.root },
		name && _react2.default.createElement(
			_SectionHeading2.default,
			{
				nameParent: nameParent,
				name: name,
				level: level,
				depth: depth,
				id: slug,
				collection: collection,
				slotName: 'sectionToolbar',
				slotProps: allProps
			},
			name
		),
		description && _react2.default.createElement(_Markdown2.default, { text: description }),
		content,
		sections,
		components
	);
}

SectionRenderer.propTypes = {
	classes: _propTypes2.default.object.isRequired,
	name: _propTypes2.default.string,
	nameParent: _propTypes2.default.string,
	level: _propTypes2.default.number,
	description: _propTypes2.default.string,
	slug: _propTypes2.default.string,
	filepath: _propTypes2.default.string,
	content: _propTypes2.default.node,
	components: _propTypes2.default.node,
	sections: _propTypes2.default.node,
	isolated: _propTypes2.default.bool,
	collection: _propTypes2.default.object,
	depth: _propTypes2.default.number.isRequired
};

exports.default = (0, _Styled2.default)(styles)(SectionRenderer);