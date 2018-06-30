'use strict';

var _renderStyleguide = require('../renderStyleguide');

var _renderStyleguide2 = _interopRequireDefault(_renderStyleguide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleguide = {
	config: {
		title: 'My Style Guide'
	},
	sections: [{
		components: [{
			props: {
				displayName: 'Button'
			},
			module: 'ButtonModule'
		}, {
			props: {
				displayName: 'Image'
			},
			module: 'ImageModule'
		}]
	}],
	welcomeScreen: false,
	patterns: ['button', 'input']
};
var codeRevision = 1;
var location = {
	hash: ''
};
var doc = {
	title: function title() {}
};
var history = {
	replaceState: function replaceState() {}
};

afterEach(function () {
	delete global.Button;
	delete global.Image;
});

xdescribe('renderStyleguide', function () {
	it('should render StyleGuide component', function () {
		var result = shallow((0, _renderStyleguide2.default)(styleguide, codeRevision, location, doc, history));
		expect(result).toMatchSnapshot();
	});

	it('should globalize all components', function () {
		(0, _renderStyleguide2.default)(styleguide, codeRevision, location, doc, history);
		expect(global.Button).toBe('ButtonModule');
		expect(global.Image).toBe('ImageModule');
	});

	it('should globalize all components in isolated mode', function () {
		(0, _renderStyleguide2.default)(styleguide, codeRevision, { hash: '#!/Button' }, doc, history);
		expect(global.Button).toBe('ButtonModule');
		expect(global.Image).toBe('ImageModule');
	});

	it('should change document title', function () {
		var title = jest.fn();
		var location = { hash: '' };
		Object.defineProperty(location, 'title', {
			set: title
		});
		(0, _renderStyleguide2.default)(styleguide, codeRevision, location, location, history);
		expect(title).toBeCalledWith('My Style Guide');
	});

	it('should change document title in isolated mode', function () {
		var title = jest.fn();
		var location = { hash: '#!/Button' };
		Object.defineProperty(location, 'title', {
			set: title
		});
		(0, _renderStyleguide2.default)(styleguide, codeRevision, location, location, history);
		expect(title).toBeCalledWith('Button — My Style Guide');
	});

	it('should remove #/ from the address bar', function () {
		var location = { hash: '#/', pathname: '/pizza', search: '?foo=bar' };
		var history = { replaceState: jest.fn() };
		(0, _renderStyleguide2.default)(styleguide, codeRevision, location, location, history);
		expect(history.replaceState).toBeCalledWith('', 'My Style Guide', '/pizza?foo=bar');
	});
});