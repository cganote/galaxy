'use strict';

var _deepfreeze = require('deepfreeze');

var _deepfreeze2 = _interopRequireDefault(_deepfreeze);

var _processSections = require('../processSections');

var _processSections2 = _interopRequireDefault(_processSections);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sections = (0, _deepfreeze2.default)([{
	sections: [{
		components: [{
			props: {
				displayName: 'Button'
			},
			module: 1
		}]
	}]
}]);

describe('processSections', function () {
	it('should recursively process all sections and components', function () {
		var result = (0, _processSections2.default)(sections);
		expect(result[0].sections[0].components[0].name).toBe('Button');
	});
});