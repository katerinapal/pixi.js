var mod_mapWebGLDrawModesToPixi = mapWebGLDrawModesToPixi;
import { CONST as const_CONST } from "../../../const";
"use strict";

/**
 * Generic Mask Stack data structure
 * @class
 * @memberof PIXI
 * @param gl {WebGLRenderingContext} The current WebGL drawing context
 * @param object
 */
function mapWebGLDrawModesToPixi(gl, object)
{
	object= object || {};

    object[const_CONST.DRAW_MODES.POINTS]         = gl.POINTS;
    object[const_CONST.DRAW_MODES.LINES]          = gl.LINES;
    object[const_CONST.DRAW_MODES.LINE_LOOP]      = gl.LINE_LOOP;
    object[const_CONST.DRAW_MODES.LINE_STRIP]     = gl.LINE_STRIP;
    object[const_CONST.DRAW_MODES.TRIANGLES]      = gl.TRIANGLES;
    object[const_CONST.DRAW_MODES.TRIANGLE_STRIP] = gl.TRIANGLE_STRIP;
    object[const_CONST.DRAW_MODES.TRIANGLE_FAN]   = gl.TRIANGLE_FAN;

}

/**
 * Generic Mask Stack data structure
 * @class
 * @memberof PIXI
 * @param gl {WebGLRenderingContext} The current WebGL drawing context
 * @param object
 */
export { mod_mapWebGLDrawModesToPixi as mapWebGLDrawModesToPixi };
