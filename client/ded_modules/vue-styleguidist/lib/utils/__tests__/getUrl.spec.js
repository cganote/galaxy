'use strict';

var _getUrl = require('../getUrl');

var _getUrl2 = _interopRequireDefault(_getUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getUrl', function () {
	var loc = {
		origin: 'http://example.com',
		pathname: '/styleguide/'
	};
	var name = 'FooBar';
	var slug = 'foobar';

	it('should return a home URL', function () {
		var result = (0, _getUrl2.default)({}, loc);
		expect(result).toBe('/styleguide/');
	});

	it('should return an absolute home URL', function () {
		var result = (0, _getUrl2.default)({ absolute: true }, loc);
		expect(result).toBe('http://example.com/styleguide/');
	});

	it('should return an anchor URL', function () {
		var result = (0, _getUrl2.default)({ name: name, slug: slug, anchor: true }, loc);
		expect(result).toBe('/styleguide/#foobar');
	});

	it('should return an absolute anchor URL', function () {
		var result = (0, _getUrl2.default)({ name: name, slug: slug, anchor: true, absolute: true }, loc);
		expect(result).toBe('http://example.com/styleguide/#foobar');
	});

	it('should return an isolated URL', function () {
		var result = (0, _getUrl2.default)({ name: name, slug: slug, isolated: true }, loc);
		expect(result).toBe('/styleguide/#!/FooBar');
	});

	it('should return an absolute isolated URL', function () {
		var result = (0, _getUrl2.default)({ name: name, slug: slug, isolated: true, absolute: true }, loc);
		expect(result).toBe('http://example.com/styleguide/#!/FooBar');
	});

	it('should return an isolated example URL', function () {
		var result = (0, _getUrl2.default)({ name: name, slug: slug, example: 3, isolated: true }, loc);
		expect(result).toBe('/styleguide/#!/FooBar/3');
	});

	it('should return an isolated example=0 URL', function () {
		var result = (0, _getUrl2.default)({ name: name, slug: slug, example: 0, isolated: true }, loc);
		expect(result).toBe('/styleguide/#!/FooBar/0');
	});

	it('should return an absolute isolated example URL', function () {
		var result = (0, _getUrl2.default)({ name: name, slug: slug, example: 3, isolated: true, absolute: true }, loc);
		expect(result).toBe('http://example.com/styleguide/#!/FooBar/3');
	});

	it('should return a nochrome URL', function () {
		var result = (0, _getUrl2.default)({ name: name, slug: slug, nochrome: true }, loc);
		expect(result).toBe('/styleguide/?nochrome#!/FooBar');
	});

	it('should return an absolute nochrome URL', function () {
		var result = (0, _getUrl2.default)({ name: name, slug: slug, nochrome: true, absolute: true }, loc);
		expect(result).toBe('http://example.com/styleguide/?nochrome#!/FooBar');
	});
});