"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Shader = undefined;

var _pixiGlCore = require("pixi-gl-core");

var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);

var _const = require("./const");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

"use strict";
var GLShader = _pixiGlCore2.default.GLShader;

function checkPrecision(src) {
    if (src instanceof Array) {
        if (src[0].substring(0, 9) !== 'precision') {
            var copy = src.slice(0);
            copy.unshift('precision ' + _const.CONST.PRECISION.DEFAULT + ' float;');
            return copy;
        }
    } else {
        if (src.substring(0, 9) !== 'precision') {
            return 'precision ' + _const.CONST.PRECISION.DEFAULT + ' float;\n' + src;
        }
    }
    return src;
}

/**
 * Wrapper class, webGL Shader for Pixi.
 * Adds precision string if vertexSrc or fragmentSrc have no mention of it.
 *
 * @class
 * @memberof PIXI
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param vertexSrc {string|string[]} The vertex shader source as an array of strings.
 * @param fragmentSrc {string|string[]} The fragment shader source as an array of strings.
 */
var Shader = function Shader(gl, vertexSrc, fragmentSrc) {
    GLShader.call(this, gl, checkPrecision(vertexSrc), checkPrecision(fragmentSrc));
};

Shader.prototype = Object.create(GLShader.prototype);
Shader.prototype.constructor = Shader;
var mod_Shader;
exports.Shader = mod_Shader = Shader;
exports.Shader = mod_Shader;