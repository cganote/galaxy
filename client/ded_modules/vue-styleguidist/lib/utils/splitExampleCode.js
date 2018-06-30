'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = splitExampleCode;

var _acorn = require('acorn');

var acorn = _interopRequireWildcard(_acorn);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Strip semicolon (;) at the end
var unsemicolon = function unsemicolon(s) {
	return s.replace(/;\s*$/, '');
};

/**
 * Take source code and returns:
 * 1. Code before the last top-level expression.
 * 2. Code with the last top-level expression wrappen in a return statement
 *    (kind of an implicit return).
 *
 * Example:
 * var a = 1; React.createElement('i', null, a); // =>
 * 1. var a = 1
 * 2. var a = 1; return (React.createElement('i', null, a));
 *
 * @param {string} code
 * @returns {object}
 */
function splitExampleCode(code) {
	var ast = void 0;
	try {
		ast = acorn.parse(code);
	} catch (err) {
		return { head: '', example: code };
	}

	var firstExpression = ast.body.reverse().find(function (_ref) {
		var type = _ref.type;
		return type === 'ExpressionStatement';
	});
	if (!firstExpression) {
		return { head: '', example: code };
	}

	var start = firstExpression.start,
	    end = firstExpression.end;

	var head = unsemicolon(code.substring(0, start));
	var firstExpressionCode = unsemicolon(code.substring(start, end));
	var example = head + ';\nreturn (' + firstExpressionCode + ');';

	return {
		head: head,
		example: example
	};
}