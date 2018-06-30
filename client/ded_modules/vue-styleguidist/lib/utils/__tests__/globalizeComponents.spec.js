'use strict';

var _globalizeComponents = require('../globalizeComponents');

var _globalizeComponents2 = _interopRequireDefault(_globalizeComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

afterEach(function () {
	delete global.Foo;
	delete global.Bar;
});

xdescribe('globalizeComponents', function () {
	it('should set all components’ modules as a global variables', function () {
		var globalsCount = Object.keys(global).length;
		(0, _globalizeComponents2.default)([{
			components: [{
				name: 'Foo',
				props: {},
				module: 13
			}],
			sections: [{
				components: [{
					name: 'Bar',
					props: {},
					module: 14
				}]
			}]
		}]);
		expect(Object.keys(global).length).toBe(globalsCount + 2);
		expect(global.Foo).toBe(13);
		expect(global.Bar).toBe(14);
	});
});