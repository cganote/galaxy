'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unquote = unquote;
exports.getType = getType;
exports.showSpaces = showSpaces;
exports.getUrlNavigation = getUrlNavigation;
exports.replaceAll = replaceAll;

var _getUrl = require('./getUrl');

var _getUrl2 = _interopRequireDefault(_getUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Remove quotes around given string.
 *
 * @param {string} string
 * @returns {string}
 */
function unquote(string) {
  return string.replace(/^['"]|['"]$/g, '');
}

/**
 * Return prop type object.
 *
 * @param {object} prop
 * @returns {object}
 */
function getType(prop) {
  return prop.flowType || prop.type;
}

/**
 * Show starting and ending whitespace around given string.
 *
 * @param {string} string
 * @returns {string}
 */
function showSpaces(string) {
  return string.replace(/^\s|\s$/g, '␣');
}

function getUrlNavigation(navigation, _ref) {
  var level = _ref.level,
      sections = _ref.sections,
      components = _ref.components,
      nameParent = _ref.nameParent,
      name = _ref.name,
      slug = _ref.slug,
      anchor = _ref.anchor,
      isolated = _ref.isolated;

  if (navigation) {
    if (level < 2 && (sections || components)) {
      return (0, _getUrl2.default)({ name: name, isolated: true });
    }
    return (0, _getUrl2.default)({ name: nameParent, id: slug, isolated: true });
  }
  return (0, _getUrl2.default)({
    name: name,
    slug: slug,
    anchor: anchor,
    isolated: isolated
  });
}

/**
 * Replace all instances of target in str with replacement.
 * @param {string} str the string to replace from
 * @param {string} target the character or substring to replace
 * @param {string} replacement the replacement charcter or string
 * @returns {string} the string with replacements made
 */
function replaceAll(str, target, replacement) {
  return str.split(target).join(replacement);
}