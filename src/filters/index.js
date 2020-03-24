import { FXAAFilterjs as fxaaFXAAFilter_FXAAFilterjs } from "./fxaa/FXAAFilter";
import { NoiseFilterjs as noiseNoiseFilter_NoiseFilterjs } from "./noise/NoiseFilter";
import {  DisplacementFilterjs as displacementDisplacementFilter_DisplacementFilterjs, } from "./displacement/DisplacementFilter";
import { BlurFilterjs as blurBlurFilter_BlurFilterjs } from "./blur/BlurFilter";
import { BlurXFilterjs as blurBlurXFilter_BlurXFilterjs } from "./blur/BlurXFilter";
import { BlurYFilterjs as blurBlurYFilter_BlurYFilterjs } from "./blur/BlurYFilter";
import { ColorMatrixFilterjs as colormatrixColorMatrixFilter_ColorMatrixFilterjs } from "./colormatrix/ColorMatrixFilter";
import { VoidFilterjs as voidVoidFilter_VoidFilterjs } from "./void/VoidFilter";

var indexjs_indexjs = {
    FXAAFilter:          fxaaFXAAFilter_FXAAFilterjs,
    NoiseFilter:        noiseNoiseFilter_NoiseFilterjs,
    DisplacementFilter: displacementDisplacementFilter_DisplacementFilterjs,
    BlurFilter:         blurBlurFilter_BlurFilterjs,
    BlurXFilter:        blurBlurXFilter_BlurXFilterjs,
    BlurYFilter:        blurBlurYFilter_BlurYFilterjs,
    ColorMatrixFilter:  colormatrixColorMatrixFilter_ColorMatrixFilterjs,
    VoidFilter:         voidVoidFilter_VoidFilterjs
};

export { indexjs_indexjs as indexjs };
