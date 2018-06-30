'use strict';

var _getInfoFromHash = require('../getInfoFromHash');

var _getInfoFromHash2 = _interopRequireDefault(_getInfoFromHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getInfoFromHash', function () {
	it('should return important part of hash if it contains component name', function () {
		var result = (0, _getInfoFromHash2.default)('#!/Button');
		expect(result).toEqual({ targetName: 'Button', targetIndex: undefined });
	});

	it('should return an empty object if hash contains no component name', function () {
		var result = (0, _getInfoFromHash2.default)('Button');
		expect(result).toEqual({});
	});

	it('should return the decoded targetName when router name is not English such as Chinese', function () {
		var result = (0, _getInfoFromHash2.default)('#!/Api%20%E7%BB%84%E4%BB%B6');
		expect(result).toEqual({ targetName: 'Api 组件', targetIndex: undefined });
	});
});