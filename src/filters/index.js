import { FXAAFilter as fxaaFXAAFilter_FXAAFilter } from "./fxaa/FXAAFilter";
import { NoiseFilter as noiseNoiseFilter_NoiseFilter } from "./noise/NoiseFilter";
import { DisplacementFilter as displacementDisplacementFilter_DisplacementFilter } from "./displacement/DisplacementFilter";
import { BlurFilter as blurBlurFilter_BlurFilter } from "./blur/BlurFilter";
import { BlurXFilter as blurBlurXFilter_BlurXFilter } from "./blur/BlurXFilter";
import { BlurYFilter as blurBlurYFilter_BlurYFilter } from "./blur/BlurYFilter";
import { ColorMatrixFilter as colormatrixColorMatrixFilter_ColorMatrixFilter } from "./colormatrix/ColorMatrixFilter";
import { VoidFilter as voidVoidFilter_VoidFilter } from "./void/VoidFilter";
"use strict";
/**
 * @file        Main export of the PIXI filters library
 * @author      Mat Groves <mat@goodboydigital.com>
 * @copyright   2013-2015 GoodBoyDigital
 * @license     {@link https://github.com/pixijs/pixi.js/blob/master/LICENSE|MIT License}
 */

/**
 * @namespace PIXI.filters
 */
mod_indexjs = {
    FXAAFilter:          fxaaFXAAFilter_FXAAFilter,
    NoiseFilter:        noiseNoiseFilter_NoiseFilter,
    DisplacementFilter: displacementDisplacementFilter_DisplacementFilter,
    BlurFilter:         blurBlurFilter_BlurFilter,
    BlurXFilter:        blurBlurXFilter_BlurXFilter,
    BlurYFilter:        blurBlurYFilter_BlurYFilter,
    ColorMatrixFilter:  colormatrixColorMatrixFilter_ColorMatrixFilter,
    VoidFilter:         voidVoidFilter_VoidFilter
};
var mod_indexjs;
export { mod_indexjs as indexjs };
