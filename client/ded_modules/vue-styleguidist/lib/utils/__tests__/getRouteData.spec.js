'use strict';

var _deepfreeze = require('deepfreeze');

var _deepfreeze2 = _interopRequireDefault(_deepfreeze);

var _getRouteData = require('../getRouteData');

var _getRouteData2 = _interopRequireDefault(_getRouteData);

var _consts = require('../../consts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sections = (0, _deepfreeze2.default)([{
	sections: [{
		components: [{
			name: 'Button',
			props: {
				displayName: 'Button',
				examples: ['example 0', 'example 1']
			},
			module: 1
		}, {
			name: 'Image',
			props: {
				displayName: 'Image'
			},
			module: 2
		}],
		sections: []
	}, {
		name: 'Section',
		content: ['example 0', 'example 1'],
		components: [],
		sections: []
	}]
}]);

xdescribe('getRouteData', function () {
	it('should return "all" mode by default', function () {
		var result = (0, _getRouteData2.default)([], '');
		expect(result.displayMode).toBe(_consts.DisplayModes.all);
	});

	it('should return one component', function () {
		var result = (0, _getRouteData2.default)(sections, '#!/Button');
		expect(result).toMatchSnapshot();
	});

	it('should return one section', function () {
		var result = (0, _getRouteData2.default)(sections, '#!/Section');
		expect(result).toMatchSnapshot();
	});

	it('should return one example from a component', function () {
		var result = (0, _getRouteData2.default)(sections, '#!/Button/1');
		expect(result).toMatchSnapshot();
	});

	it('should return one example from a section', function () {
		var result = (0, _getRouteData2.default)(sections, '#!/Section/1');
		expect(result).toMatchSnapshot();
	});

	it('should return first section if pagePerSection and hash is empty', function () {
		var result = (0, _getRouteData2.default)(sections, '', true);
		expect(result).toMatchSnapshot();
	});

	it('should return first component if pagePerSection and hash is empty', function () {
		var result = (0, _getRouteData2.default)(sections[0].sections, '', true);
		expect(result).toMatchSnapshot();
	});
});