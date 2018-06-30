'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComponentsListRenderer = require('rsg-components/ComponentsList/ComponentsListRenderer');

var _ComponentsListRenderer2 = _interopRequireDefault(_ComponentsListRenderer);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('../../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ComponentsList(_ref, _ref2) {
	var classes = _ref.classes,
	    items = _ref.items,
	    _ref$useIsolatedLinks = _ref.useIsolatedLinks,
	    useIsolatedLinks = _ref$useIsolatedLinks === undefined ? false : _ref$useIsolatedLinks;
	var config = _ref2.config;

	var navigation = config.navigation;
	var mappedItems = items.map(function (item) {
		return _extends({}, item, {
			href: (0, _utils.getUrlNavigation)(navigation, {
				name: item.name,
				slug: item.slug,
				nameParent: item.nameParent,
				level: item.level,
				sections: item.sections,
				components: item.components,
				anchor: !useIsolatedLinks,
				isolated: useIsolatedLinks
			})
		});
	});
	return _react2.default.createElement(_ComponentsListRenderer2.default, { classes: classes, items: mappedItems });
}

ComponentsList.propTypes = {
	items: _propTypes2.default.array.isRequired,
	classes: _propTypes2.default.object,
	useIsolatedLinks: _propTypes2.default.bool
};

ComponentsList.contextTypes = {
	config: _propTypes2.default.object
};

exports.default = ComponentsList;