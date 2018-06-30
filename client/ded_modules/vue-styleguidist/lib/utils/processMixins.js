'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = processMixins;

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function globalizeMixin(mixin) {
	_vue2.default.mixin(mixin);
}

function processMixins(mixins) {
	mixins.forEach(function (mixin) {
		if (mixin.default) {
			globalizeMixin(mixin.default);
		} else {
			globalizeMixin(mixin);
		}
	});
}