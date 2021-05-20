var mod_mapCanvasBlendModesToPixi = mapCanvasBlendModesToPixi;
import { CONST as const_CONST } from "../../../const";
import {     canUseNewCanvasBlendModes as canUseNewCanvasBlendModes_canUseNewCanvasBlendModes, } from "./canUseNewCanvasBlendModes";
"use strict";

/**
 * Maps blend combinations to Canvas
 * @class
 * @memberof PIXI
 * @param array
 */
function mapCanvasBlendModesToPixi(array)
{
    array = array || [];

    if (canUseNewCanvasBlendModes_canUseNewCanvasBlendModes())
    {
        array[const_CONST.BLEND_MODES.NORMAL]        = 'source-over';
        array[const_CONST.BLEND_MODES.ADD]           = 'lighter'; //IS THIS OK???
        array[const_CONST.BLEND_MODES.MULTIPLY]      = 'multiply';
        array[const_CONST.BLEND_MODES.SCREEN]        = 'screen';
        array[const_CONST.BLEND_MODES.OVERLAY]       = 'overlay';
        array[const_CONST.BLEND_MODES.DARKEN]        = 'darken';
        array[const_CONST.BLEND_MODES.LIGHTEN]       = 'lighten';
        array[const_CONST.BLEND_MODES.COLOR_DODGE]   = 'color-dodge';
        array[const_CONST.BLEND_MODES.COLOR_BURN]    = 'color-burn';
        array[const_CONST.BLEND_MODES.HARD_LIGHT]    = 'hard-light';
        array[const_CONST.BLEND_MODES.SOFT_LIGHT]    = 'soft-light';
        array[const_CONST.BLEND_MODES.DIFFERENCE]    = 'difference';
        array[const_CONST.BLEND_MODES.EXCLUSION]     = 'exclusion';
        array[const_CONST.BLEND_MODES.HUE]           = 'hue';
        array[const_CONST.BLEND_MODES.SATURATION]    = 'saturate';
        array[const_CONST.BLEND_MODES.COLOR]         = 'color';
        array[const_CONST.BLEND_MODES.LUMINOSITY]    = 'luminosity';
    }
    else
    {
        // this means that the browser does not support the cool new blend modes in canvas 'cough' ie 'cough'
        array[const_CONST.BLEND_MODES.NORMAL]        = 'source-over';
        array[const_CONST.BLEND_MODES.ADD]           = 'lighter'; //IS THIS OK???
        array[const_CONST.BLEND_MODES.MULTIPLY]      = 'source-over';
        array[const_CONST.BLEND_MODES.SCREEN]        = 'source-over';
        array[const_CONST.BLEND_MODES.OVERLAY]       = 'source-over';
        array[const_CONST.BLEND_MODES.DARKEN]        = 'source-over';
        array[const_CONST.BLEND_MODES.LIGHTEN]       = 'source-over';
        array[const_CONST.BLEND_MODES.COLOR_DODGE]   = 'source-over';
        array[const_CONST.BLEND_MODES.COLOR_BURN]    = 'source-over';
        array[const_CONST.BLEND_MODES.HARD_LIGHT]    = 'source-over';
        array[const_CONST.BLEND_MODES.SOFT_LIGHT]    = 'source-over';
        array[const_CONST.BLEND_MODES.DIFFERENCE]    = 'source-over';
        array[const_CONST.BLEND_MODES.EXCLUSION]     = 'source-over';
        array[const_CONST.BLEND_MODES.HUE]           = 'source-over';
        array[const_CONST.BLEND_MODES.SATURATION]    = 'source-over';
        array[const_CONST.BLEND_MODES.COLOR]         = 'source-over';
        array[const_CONST.BLEND_MODES.LUMINOSITY]    = 'source-over';
    }

    return array;
}

/**
 * Maps blend combinations to Canvas
 * @class
 * @memberof PIXI
 * @param array
 */
export { mod_mapCanvasBlendModesToPixi as mapCanvasBlendModesToPixi };
