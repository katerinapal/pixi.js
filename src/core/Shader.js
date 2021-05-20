import ext_pixiglcore from "pixi-gl-core";
import { CONST as Const } from "./const";
"use strict";
var GLShader = ext_pixiglcore.GLShader;

function checkPrecision(src) {
    if (src instanceof Array) {
        if (src[0].substring(0,9) !== 'precision') {
            var copy = src.slice(0);
            copy.unshift('precision ' + Const.PRECISION.DEFAULT + ' float;');
            return copy;
        }
    } else {
        if (src.substring(0,9) !== 'precision') {
            return 'precision ' + Const.PRECISION.DEFAULT + ' float;\n' + src;
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
var Shader = function(gl, vertexSrc, fragmentSrc) {
    GLShader.call(this, gl, checkPrecision(vertexSrc), checkPrecision(fragmentSrc));
};

Shader.prototype = Object.create(GLShader.prototype);
Shader.prototype.constructor = Shader;
var mod_Shader;
mod_Shader = Shader;
export { mod_Shader as Shader };
