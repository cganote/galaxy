"use strict";

var babel = require('babel-core');

module.exports = function getParseBabel(code) {
	var comments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	var options = {
		ast: false,
		comments: comments,
		presets: [["env", {
			"targets": {
				"chrome": 52
			}
		}]],
		plugins: ["transform-object-rest-spread"]
	};
	return babel.transform(code, options);
};