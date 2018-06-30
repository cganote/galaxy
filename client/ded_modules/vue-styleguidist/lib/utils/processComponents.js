'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = processComponents;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function processExamples(examples, vuex) {
	return examples.map(function (example) {
		if (example.type === 'code') {
			example.vuex = vuex;
		}
		return example;
	});
}

/**
 * Do things that are hard or impossible to do in a loader: we don’t have access to component name
 * and props in the styleguide-loader because we’re using `require` to load the component module.
 *
 * @param {Array} components
 * @param {String} vuex
 * @param {Number} level
 * @param {String} nameParent
 * @return {Array}
 */
function processComponents(components, vuex) {
	var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	var nameParent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

	return components.map(function (component) {
		var newComponent = _extends({}, component, {

			// Add .name shortcuts for names instead of .props.displayName.
			name: component.props.displayName,
			level: level,
			nameParent: nameParent,
			props: _extends({}, component.props, {
				// Append @example doclet to all examples
				examples: [].concat(_toConsumableArray(component.props.examples || []), _toConsumableArray(component.props.example || []))
			})
		});

		delete newComponent.props.example;
		newComponent.props.examples = processExamples(newComponent.props.examples, vuex);

		return newComponent;
	});
}