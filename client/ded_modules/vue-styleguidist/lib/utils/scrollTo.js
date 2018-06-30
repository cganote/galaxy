"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = scrollTo;
function scrollTo() {
	var element = document.scrollingElement || document.documentElement;
	element.scrollTop = 0;
}