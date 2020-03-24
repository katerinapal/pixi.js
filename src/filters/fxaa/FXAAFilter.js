"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FXAAFilter = undefined;

var _core = require("../../core");

var _glslify = require("glslify");

var _glslify2 = _interopRequireDefault(_glslify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FXAAFilter() {
    //TODO - needs work
    _core.core.Filter.call(this,

    // vertex shader
    (0, _glslify2.default)('./fxaa.vert'),
    // fragment shader
    (0, _glslify2.default)('./fxaa.frag'));
}

FXAAFilter.prototype = Object.create(_core.core.Filter.prototype);
FXAAFilter.prototype.constructor = FXAAFilter;

var exported_FXAAFilter = FXAAFilter;

/**
 *
 * Basic FXAA implementation based on the code on geeks3d.com with the
 * modification that the texture2DLod stuff was removed since it's
 * unsupported by WebGL.
 *
 * @see https://github.com/mitsuhiko/webgl-meincraft
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI
 *
 */
exports.FXAAFilter = exported_FXAAFilter;
