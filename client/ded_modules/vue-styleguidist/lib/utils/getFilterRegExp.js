'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFilterRegExp;
/**
 * RegExp to fuzzy filter components list by component name.
 *
 * @param {string} query
 * @return {RegExp}
 */
function getFilterRegExp(query) {
  query = query.replace(/[^a-z0-9]/gi, '').split('').join('.*');
  return new RegExp(query, 'i');
}