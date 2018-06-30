'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Section;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Examples = require('rsg-components/Examples');

var _Examples2 = _interopRequireDefault(_Examples);

var _Components = require('rsg-components/Components');

var _Components2 = _interopRequireDefault(_Components);

var _Sections = require('rsg-components/Sections');

var _Sections2 = _interopRequireDefault(_Sections);

var _SectionRenderer = require('rsg-components/Section/SectionRenderer');

var _SectionRenderer2 = _interopRequireDefault(_SectionRenderer);

var _consts = require('../../consts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Section(_ref, _ref2) {
	var section = _ref.section,
	    depth = _ref.depth;
	var displayMode = _ref2.displayMode;
	var name = section.name,
	    slug = section.slug,
	    filepath = section.filepath,
	    content = section.content,
	    components = section.components,
	    sections = section.sections,
	    description = section.description,
	    level = section.level,
	    nameParent = section.nameParent;


	var contentJsx = content && _react2.default.createElement(_Examples2.default, { examples: content, name: name });
	var componentsJsx = components && _react2.default.createElement(_Components2.default, { components: components, depth: depth + 1 });
	var sectionsJsx = sections && _react2.default.createElement(_Sections2.default, { sections: sections, depth: depth + 1 });
	var collection = { components: components, sections: sections };

	return _react2.default.createElement(_SectionRenderer2.default, {
		description: description,
		name: name,
		level: level,
		nameParent: nameParent,
		slug: slug,
		filepath: filepath,
		content: contentJsx,
		components: componentsJsx,
		sections: sectionsJsx,
		collection: collection,
		isolated: displayMode !== _consts.DisplayModes.all,
		depth: depth
	});
}

Section.propTypes = {
	section: _propTypes2.default.object.isRequired,
	depth: _propTypes2.default.number.isRequired
};

Section.contextTypes = {
	displayMode: _propTypes2.default.string
};