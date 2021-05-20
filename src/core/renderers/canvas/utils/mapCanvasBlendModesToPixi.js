"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mapCanvasBlendModesToPixi = undefined;

var _const = require("../../../const");

var _canUseNewCanvasBlendModes = require("./canUseNewCanvasBlendModes");

var mod_mapCanvasBlendModesToPixi = mapCanvasBlendModesToPixi;

"use strict";

/**
 * Maps blend combinations to Canvas
 * @class
 * @memberof PIXI
 * @param array
 */
function mapCanvasBlendModesToPixi(array) {
    array = array || [];

    if ((0, _canUseNewCanvasBlendModes.canUseNewCanvasBlendModes)()) {
        array[_const.CONST.BLEND_MODES.NORMAL] = 'source-over';
        array[_const.CONST.BLEND_MODES.ADD] = 'lighter'; //IS THIS OK???
        array[_const.CONST.BLEND_MODES.MULTIPLY] = 'multiply';
        array[_const.CONST.BLEND_MODES.SCREEN] = 'screen';
        array[_const.CONST.BLEND_MODES.OVERLAY] = 'overlay';
        array[_const.CONST.BLEND_MODES.DARKEN] = 'darken';
        array[_const.CONST.BLEND_MODES.LIGHTEN] = 'lighten';
        array[_const.CONST.BLEND_MODES.COLOR_DODGE] = 'color-dodge';
        array[_const.CONST.BLEND_MODES.COLOR_BURN] = 'color-burn';
        array[_const.CONST.BLEND_MODES.HARD_LIGHT] = 'hard-light';
        array[_const.CONST.BLEND_MODES.SOFT_LIGHT] = 'soft-light';
        array[_const.CONST.BLEND_MODES.DIFFERENCE] = 'difference';
        array[_const.CONST.BLEND_MODES.EXCLUSION] = 'exclusion';
        array[_const.CONST.BLEND_MODES.HUE] = 'hue';
        array[_const.CONST.BLEND_MODES.SATURATION] = 'saturate';
        array[_const.CONST.BLEND_MODES.COLOR] = 'color';
        array[_const.CONST.BLEND_MODES.LUMINOSITY] = 'luminosity';
    } else {
        // this means that the browser does not support the cool new blend modes in canvas 'cough' ie 'cough'
        array[_const.CONST.BLEND_MODES.NORMAL] = 'source-over';
        array[_const.CONST.BLEND_MODES.ADD] = 'lighter'; //IS THIS OK???
        array[_const.CONST.BLEND_MODES.MULTIPLY] = 'source-over';
        array[_const.CONST.BLEND_MODES.SCREEN] = 'source-over';
        array[_const.CONST.BLEND_MODES.OVERLAY] = 'source-over';
        array[_const.CONST.BLEND_MODES.DARKEN] = 'source-over';
        array[_const.CONST.BLEND_MODES.LIGHTEN] = 'source-over';
        array[_const.CONST.BLEND_MODES.COLOR_DODGE] = 'source-over';
        array[_const.CONST.BLEND_MODES.COLOR_BURN] = 'source-over';
        array[_const.CONST.BLEND_MODES.HARD_LIGHT] = 'source-over';
        array[_const.CONST.BLEND_MODES.SOFT_LIGHT] = 'source-over';
        array[_const.CONST.BLEND_MODES.DIFFERENCE] = 'source-over';
        array[_const.CONST.BLEND_MODES.EXCLUSION] = 'source-over';
        array[_const.CONST.BLEND_MODES.HUE] = 'source-over';
        array[_const.CONST.BLEND_MODES.SATURATION] = 'source-over';
        array[_const.CONST.BLEND_MODES.COLOR] = 'source-over';
        array[_const.CONST.BLEND_MODES.LUMINOSITY] = 'source-over';
    }

    return array;
}

/**
 * Maps blend combinations to Canvas
 * @class
 * @memberof PIXI
 * @param array
 */
exports.mapCanvasBlendModesToPixi = mod_mapCanvasBlendModesToPixi;