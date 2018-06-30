'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getIdParam;
function getIdParam() {
	var param = 'id';
	var url = location.href;
	var regexS = '[\\?&]' + param + '=([^&#]*)';
	var regex = new RegExp(regexS);
	var results = regex.exec(url);
	return results == null ? null : results[1];
}