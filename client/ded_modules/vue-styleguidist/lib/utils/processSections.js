'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = processSections;

var _processComponents = require('./processComponents');

var _processComponents2 = _interopRequireDefault(_processComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Recursively process each component in all sections.
 *
 * @param {Array} sections
 * @param {String} vuex
 * @param {Number} level
 * @param {String} nameParent
 * @return {Array}
 */
function processSections(sections, vuex) {
  var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var nameParent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

  return sections.map(function (section) {
    return _extends({}, section, {
      components: (0, _processComponents2.default)(section.components || [], vuex, level + 1, section.name),
      sections: processSections(section.sections || [], vuex, level + 1, section.name),
      nameParent: nameParent,
      level: level
    });
  });
}