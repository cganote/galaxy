"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filterComponentsByExactName;
/**
 * Filters list of components by component name.
 *
 * @param {Array} components
 * @param {string} name
 * @return {Array}
 */
function filterComponentsByExactName(components, name) {
  return components.filter(function (component) {
    return component.name === name;
  });
}