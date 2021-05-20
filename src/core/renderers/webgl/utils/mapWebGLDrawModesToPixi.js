"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapWebGLDrawModesToPixi = undefined;

var _const = require("../../../const");

var mod_mapWebGLDrawModesToPixi = mapWebGLDrawModesToPixi;

"use strict";

/**
 * Generic Mask Stack data structure
 * @class
 * @memberof PIXI
 * @param gl {WebGLRenderingContext} The current WebGL drawing context
 * @param object
 */
function mapWebGLDrawModesToPixi(gl, object) {
  object = object || {};

  object[_const.CONST.DRAW_MODES.POINTS] = gl.POINTS;
  object[_const.CONST.DRAW_MODES.LINES] = gl.LINES;
  object[_const.CONST.DRAW_MODES.LINE_LOOP] = gl.LINE_LOOP;
  object[_const.CONST.DRAW_MODES.LINE_STRIP] = gl.LINE_STRIP;
  object[_const.CONST.DRAW_MODES.TRIANGLES] = gl.TRIANGLES;
  object[_const.CONST.DRAW_MODES.TRIANGLE_STRIP] = gl.TRIANGLE_STRIP;
  object[_const.CONST.DRAW_MODES.TRIANGLE_FAN] = gl.TRIANGLE_FAN;
}

/**
 * Generic Mask Stack data structure
 * @class
 * @memberof PIXI
 * @param gl {WebGLRenderingContext} The current WebGL drawing context
 * @param object
 */
exports.mapWebGLDrawModesToPixi = mod_mapWebGLDrawModesToPixi;