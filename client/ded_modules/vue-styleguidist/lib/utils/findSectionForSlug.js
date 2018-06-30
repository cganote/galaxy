'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = findSectionForSlug;
/**
 * Recursively finds a slug from section with a given name (exact match)
 *
 * @param  {object}  section
 * @param  {string} slug
 * @return {object}
 */
function findSectionForSlug(section, slug) {
	var foundInSections = section.sections.find(
	// Need to replace whitespace in order to get a match in all browsers
	function (section) {
		return section.slug.replace(/\s/g, '%20') === slug.replace(/\s/g, '%20');
	});

	if (foundInSections) {
		return foundInSections;
	}
	var foundInComponent = section.components.find(function (component) {
		return component.slug === slug;
	});

	if (foundInComponent) {
		return {
			components: [foundInComponent]
		};
	}

	return undefined;
}