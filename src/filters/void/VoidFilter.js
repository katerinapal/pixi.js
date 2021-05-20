"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VoidFilter = undefined;

var _core = require("../../core");

var _glslify = require("glslify");

var _glslify2 = _interopRequireDefault(_glslify);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var mod_VoidFilter = VoidFilter;

"use strict";

/**
 * Does nothing. Very handy.
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI.filters
 */
function VoidFilter() {
  _core.core.Filter.call(this,
  // vertex shader
  (0, _glslify2.default)('../fragments/default.vert'),
  // fragment shader
  (0, _glslify2.default)('./void.frag'));

  this.glShaderKey = 'void';
}

VoidFilter.prototype = Object.create(_core.core.Filter.prototype);
VoidFilter.prototype.constructor = VoidFilter;

/**
 * Does nothing. Very handy.
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI.filters
 */
exports.VoidFilter = mod_VoidFilter;