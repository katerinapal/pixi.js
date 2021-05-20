"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TilingShader = undefined;

var _Shader = require("../../core/Shader");

var _glslify = require("glslify");

var _glslify2 = _interopRequireDefault(_glslify);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var mod_TilingShader = TilingShader;

"use strict";

/**
 * @class
 * @extends PIXI.Shader
 * @memberof PIXI.mesh
 * @param gl {PIXI.Shader} The WebGL shader manager this shader works for.
 */
function TilingShader(gl) {
  _Shader.Shader.call(this, gl, (0, _glslify2.default)('./tilingSprite.vert'), (0, _glslify2.default)('./tilingSprite.frag'));
}

TilingShader.prototype = Object.create(_Shader.Shader.prototype);
TilingShader.prototype.constructor = TilingShader;

/**
 * @class
 * @extends PIXI.Shader
 * @memberof PIXI.mesh
 * @param gl {PIXI.Shader} The WebGL shader manager this shader works for.
 */
exports.TilingShader = mod_TilingShader;