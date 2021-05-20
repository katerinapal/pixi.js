var mod_mapWebGLBlendModesToPixi = mapWebGLBlendModesToPixi;
import { CONST as const_CONST } from "../../../const";
"use strict";

/**
 * Maps gl blend combinations to WebGL
 * @class
 * @memberof PIXI
 * @param gl {WebGLRenderingContext} The current WebGL drawing context
 * @param array
 */
function mapWebGLBlendModesToPixi(gl, array)
{
    array = array || [];

    //TODO - premultiply alpha would be different.
    //add a boolean for that!
    array[const_CONST.BLEND_MODES.NORMAL]        = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
    array[const_CONST.BLEND_MODES.ADD]           = [gl.ONE,       gl.DST_ALPHA];
    array[const_CONST.BLEND_MODES.MULTIPLY]      = [gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA];
    array[const_CONST.BLEND_MODES.SCREEN]        = [gl.ONE,       gl.ONE_MINUS_SRC_COLOR];
    array[const_CONST.BLEND_MODES.OVERLAY]       = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
    array[const_CONST.BLEND_MODES.DARKEN]        = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
    array[const_CONST.BLEND_MODES.LIGHTEN]       = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
    array[const_CONST.BLEND_MODES.COLOR_DODGE]   = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
    array[const_CONST.BLEND_MODES.COLOR_BURN]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
    array[const_CONST.BLEND_MODES.HARD_LIGHT]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
    array[const_CONST.BLEND_MODES.SOFT_LIGHT]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
    array[const_CONST.BLEND_MODES.DIFFERENCE]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
    array[const_CONST.BLEND_MODES.EXCLUSION]     = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
    array[const_CONST.BLEND_MODES.HUE]           = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
    array[const_CONST.BLEND_MODES.SATURATION]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
    array[const_CONST.BLEND_MODES.COLOR]         = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
    array[const_CONST.BLEND_MODES.LUMINOSITY]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];

    return array;
}

/**
 * Maps gl blend combinations to WebGL
 * @class
 * @memberof PIXI
 * @param gl {WebGLRenderingContext} The current WebGL drawing context
 * @param array
 */
export { mod_mapWebGLBlendModesToPixi as mapWebGLBlendModesToPixi };
