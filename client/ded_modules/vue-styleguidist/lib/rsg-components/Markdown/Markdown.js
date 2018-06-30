'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _markdownToJsx = require('markdown-to-jsx');

var _Link = require('rsg-components/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Text = require('rsg-components/Text');

var _Text2 = _interopRequireDefault(_Text);

var _Para = require('rsg-components/Para');

var _Para2 = _interopRequireDefault(_Para);

var _MarkdownHeading = require('rsg-components/Markdown/MarkdownHeading');

var _MarkdownHeading2 = _interopRequireDefault(_MarkdownHeading);

var _List = require('rsg-components/Markdown/List');

var _List2 = _interopRequireDefault(_List);

var _Blockquote = require('rsg-components/Markdown/Blockquote');

var _Blockquote2 = _interopRequireDefault(_Blockquote);

var _Pre = require('rsg-components/Markdown/Pre');

var _Pre2 = _interopRequireDefault(_Pre);

var _Code = require('rsg-components/Code');

var _Code2 = _interopRequireDefault(_Code);

var _Checkbox = require('rsg-components/Markdown/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Hr = require('rsg-components/Markdown/Hr');

var _Hr2 = _interopRequireDefault(_Hr);

var _Table = require('rsg-components/Markdown/Table');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// We’re explicitly specifying Webpack loaders here so we could skip specifying them in Webpack configuration.
// That way we could avoid clashes between our loaders and user loaders.
// eslint-disable-next-line import/no-unresolved
require('!!../../../loaders/style-loader!../../../loaders/css-loader!highlight.js/styles/tomorrow.css');

var baseOverrides = {
	a: {
		component: _Link2.default
	},
	h1: {
		component: _MarkdownHeading2.default,
		props: {
			level: 1
		}
	},
	h2: {
		component: _MarkdownHeading2.default,
		props: {
			level: 2
		}
	},
	h3: {
		component: _MarkdownHeading2.default,
		props: {
			level: 3
		}
	},
	h4: {
		component: _MarkdownHeading2.default,
		props: {
			level: 4
		}
	},
	h5: {
		component: _MarkdownHeading2.default,
		props: {
			level: 5
		}
	},
	h6: {
		component: _MarkdownHeading2.default,
		props: {
			level: 6
		}
	},
	p: {
		component: _Para2.default,
		props: {
			semantic: 'p'
		}
	},
	em: {
		component: _Text2.default,
		props: {
			semantic: 'em'
		}
	},
	strong: {
		component: _Text2.default,
		props: {
			semantic: 'strong'
		}
	},
	ul: {
		component: _List2.default
	},
	ol: {
		component: _List2.default,
		props: {
			ordered: true
		}
	},
	blockquote: {
		component: _Blockquote2.default
	},
	code: {
		component: _Code2.default
	},
	pre: {
		component: _Pre2.default
	},
	input: {
		component: _Checkbox2.default
	},
	hr: {
		component: _Hr2.default
	},
	table: {
		component: _Table.Table
	},
	thead: {
		component: _Table.TableHead
	},
	th: {
		component: _Table.TableCell,
		props: {
			header: true
		}
	},
	tbody: {
		component: _Table.TableBody
	},
	tr: {
		component: _Table.TableRow
	},
	td: {
		component: _Table.TableCell
	}
};

var inlineOverrides = _extends({}, baseOverrides, {
	p: {
		component: _Text2.default
	}
});

function Markdown(_ref) {
	var text = _ref.text,
	    inline = _ref.inline;

	var overrides = inline ? inlineOverrides : baseOverrides;
	return (0, _markdownToJsx.compiler)(text, { overrides: overrides, forceBlock: true });
}

Markdown.propTypes = {
	text: _propTypes2.default.string.isRequired,
	inline: _propTypes2.default.bool
};

exports.default = Markdown;