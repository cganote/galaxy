'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSource = exports.parse = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

var _stateDoc = require('./utils/stateDoc');

var _stateDoc2 = _interopRequireDefault(_stateDoc);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parse = exports.parse = function parse(file) {
  var source = _fs2.default.readFileSync(file, {
    encoding: 'utf-8'
  });
  if (source === '') {
    throw new Error('The document is empty');
  }
  _stateDoc2.default.file = file;
  _stateDoc2.default.saveComponent(source, file);
  var component = utils.getSandbox(_stateDoc2.default, file).default;
  var vueDoc = utils.getVueDoc(_stateDoc2.default, component);
  _stateDoc2.default.reset();
  return vueDoc;
};

var parseSource = exports.parseSource = function parseSource(source, path) {
  if (source === '') {
    throw new Error('The document is empty');
  }

  _stateDoc2.default.file = path;
  _stateDoc2.default.saveComponent(source, path);
  var component = utils.getSandbox(_stateDoc2.default, path).default;
  var vueDoc = utils.getVueDoc(_stateDoc2.default, component);
  _stateDoc2.default.reset();
  return vueDoc;
};