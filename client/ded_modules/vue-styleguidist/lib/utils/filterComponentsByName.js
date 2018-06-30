'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filterComponentsByName;

var _getFilterRegExp = require('./getFilterRegExp');

var _getFilterRegExp2 = _interopRequireDefault(_getFilterRegExp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Fuzzy filters components list by component name.
 *
 * @param {array} components
 * @param {string} query
 * @return {array}
 */
function filterComponentsByName(components, query) {
  var regExp = (0, _getFilterRegExp2.default)(query);
  return components.filter(function (_ref) {
    var name = _ref.name;
    return regExp.test(name);
  });
}