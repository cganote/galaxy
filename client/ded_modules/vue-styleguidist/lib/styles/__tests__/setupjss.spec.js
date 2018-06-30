'use strict';

var _jss = require('jss');

var _jss2 = _interopRequireDefault(_jss);

var _setupjss = require('../setupjss');

var _setupjss2 = _interopRequireDefault(_setupjss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('setupjss', function () {
	it('should renerate prefixed class names', function () {
		var _jss$createStyleSheet = _setupjss2.default.createStyleSheet({
			root: {}
		}),
		    classes = _jss$createStyleSheet.classes;

		expect(classes.root).toMatch(/^rsg--\w+-\d+$/);
	});

	it('jss-global plugin should be enabled', function () {
		var css = _setupjss2.default.createStyleSheet({
			'@global body': {
				color: 'red'
			}
		}).toString();
		expect(css).toMatch(/^body {/);
	});

	it('jss plugins should be enabled', function () {
		var stylesheet = _setupjss2.default.createStyleSheet({
			root: {
				backgroundColor: 'tomato',
				width: 1,
				'&:hover': {
					color: 'snow'
				}
			},
			child: {
				composes: '$root',
				color: 'blue'
			}
		});

		var root = stylesheet.getRule('root').style;
		expect(root).toEqual(expect.any(Object));
		expect(root['background-color']).toBe('tomato');
		expect(root.width).toBe('1px');
		expect(stylesheet.classes.root).toMatch(/^rsg--root-\d+$/);

		var child = stylesheet.getRule('child').style;
		expect(child).toEqual(expect.any(Object));
		expect(child.color).toBe('blue');
		expect(stylesheet.classes.child).toMatch(/^rsg--child-\d+ rsg--root-\d+$/);

		var hover = stylesheet.rules.map['.rsg--root-2:hover'];
		expect(hover).toEqual(expect.any(Object));
		expect(hover.style.color).toBe('snow');
	});

	it('base jss instance setup shoud not affect Styleguidist styles', function () {
		_jss2.default.setup();

		var stylesheet = _setupjss2.default.createStyleSheet({
			root: {
				width: 1
			}
		});

		expect(stylesheet.classes.root).toMatch(/^rsg--root-\d+$/);

		var root = stylesheet.getRule('root').style;
		expect(root.width).toBe('1px');
	});
});