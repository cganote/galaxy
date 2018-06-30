'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getInfoFromHash;

var _isNaN = require('lodash/isNaN');

var _isNaN2 = _interopRequireDefault(_isNaN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns an object containing component/section name and, optionally, an example index
 * from hash part or page URL:
 * #!/Button → { targetName: 'Button' }
 * #!/Button/1 → { targetName: 'Button', targetIndex: 1 }
 *
 * @param {string} hash
 * @returns {object}
 */
function getInfoFromHash(hash) {
	if (hash.substr(0, 3) === '#!/') {
		var path = hash.substr(3);
		if (path.indexOf('?id') > -1) {
			path = path.replace(path.slice(path.indexOf('?id')), '');
		}
		var tokens = path.split('/');
		var index = parseInt(tokens[1], 10);
		return {
			targetName: decodeURIComponent(tokens[0]),
			targetIndex: (0, _isNaN2.default)(index) ? undefined : index
		};
	}
	return {};
}