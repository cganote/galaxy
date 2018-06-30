'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Slot = require('./Slot');

var _Slot2 = _interopRequireDefault(_Slot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prop-types */

var Button = function Button(_ref) {
	var onClick = _ref.onClick;
	return _react2.default.createElement(
		'button',
		{ onClick: onClick },
		'1'
	);
};
var Button2 = function Button2() {
	return _react2.default.createElement(
		'button',
		null,
		'2'
	);
};
var fillsWithIds = [{
	id: 'one',
	render: Button
}, {
	id: 'two',
	render: Button2
}];

it('should renderer slots and pass props', function () {
	var actual = shallow(_react2.default.createElement(_Slot2.default, { name: 'slot', props: { id: 'Pizza' } }), {
		context: {
			slots: {
				slot: [Button, Button2]
			}
		}
	});

	expect(actual).toMatchSnapshot();
});

it('should renderer slots in id/render format', function () {
	var actual = shallow(_react2.default.createElement(_Slot2.default, { name: 'slot', props: { id: 'Pizza' } }), {
		context: {
			slots: {
				slot: fillsWithIds
			}
		}
	});

	expect(actual).toMatchSnapshot();
});

it('should pass active flag to active slot', function () {
	var actual = shallow(_react2.default.createElement(_Slot2.default, { name: 'slot', active: 'two' }), {
		context: {
			slots: {
				slot: fillsWithIds
			}
		}
	});

	expect(actual).toMatchSnapshot();
});

it('should renderer only active slot if onlyActive=true', function () {
	var actual = shallow(_react2.default.createElement(_Slot2.default, { name: 'slot', active: 'two', onlyActive: true }), {
		context: {
			slots: {
				slot: fillsWithIds
			}
		}
	});

	expect(actual).toMatchSnapshot();
});

it('should pass slot ID to onClick handler', function () {
	var onClick = jest.fn();
	var actual = mount(_react2.default.createElement(_Slot2.default, { name: 'slot', props: { onClick: onClick } }), {
		context: {
			slots: {
				slot: fillsWithIds
			}
		}
	});

	actual.find('button').first().simulate('click');

	expect(onClick).toBeCalledWith('one', expect.any(Object));
});

it('should return null if all slots render null', function () {
	var actual = render(_react2.default.createElement(_Slot2.default, { name: 'slot', props: { id: 'Pizza' } }), {
		context: {
			slots: {
				slot: [function () {
					return null;
				}]
			}
		}
	});

	expect(actual.node).toBeFalsy();
});