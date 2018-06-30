'use strict';

var _globalizeComponent = require('../globalizeComponent');

var _globalizeComponent2 = _interopRequireDefault(_globalizeComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = { module: 'someModule', name: 'SomeName' };

xdescribe('globalizeComponent', function () {
	afterEach(function () {
		delete global[component.name];
	});

	it('should not add anything as a global variable if there is no component name', function () {
		expect(global[component.name]).toBeUndefined();
		(0, _globalizeComponent2.default)({});
		expect(global[component.name]).toBeUndefined();
	});

	it('should set the return value of getComponent as a global variable', function () {
		expect(global[component.name]).toBeUndefined();
		(0, _globalizeComponent2.default)(component);
		expect(global[component.name]).toBe(component.module);
	});
});