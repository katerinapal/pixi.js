import { CONST as const_CONST } from "./const";
import { indexjs as math_indexjs } from "./math";
import { utils as utils_utils } from "./utils";
import { indexjs as ticker_indexjs } from "./ticker";
import { DisplayObject as displayDisplayObject_DisplayObject } from "./display/DisplayObject";
import { Container as displayContainer_Container } from "./display/Container";
import { Transform as displayTransform_Transform } from "./display/Transform";
import { TransformStatic as displayTransformStatic_TransformStatic } from "./display/TransformStatic";
import { TransformBase as displayTransformBase_TransformBase } from "./display/TransformBase";
import { Sprite as spritesSprite_Sprite } from "./sprites/Sprite";
import {  CanvasSpriteRenderer as spritescanvasCanvasSpriteRenderer_CanvasSpriteRenderer, } from "./sprites/canvas/CanvasSpriteRenderer";
import { CanvasTinter as spritescanvasCanvasTinter_CanvasTinter } from "./sprites/canvas/CanvasTinter";
import { SpriteRenderer as spriteswebglSpriteRenderer_SpriteRenderer } from "./sprites/webgl/SpriteRenderer";
import { Text as textText_Text } from "./text/Text";
import { TextStyle as textTextStyle_TextStyle } from "./text/TextStyle";
import { Graphics as graphicsGraphics_Graphics } from "./graphics/Graphics";
import { GraphicsData as graphicsGraphicsData_GraphicsData } from "./graphics/GraphicsData";
import { GraphicsRenderer as graphicswebglGraphicsRenderer_GraphicsRenderer } from "./graphics/webgl/GraphicsRenderer";
import {  CanvasGraphicsRenderer as graphicscanvasCanvasGraphicsRenderer_CanvasGraphicsRenderer, } from "./graphics/canvas/CanvasGraphicsRenderer";
import { Texture as texturesTexture_Texture } from "./textures/Texture";
import { BaseTexture as texturesBaseTexture_BaseTexture } from "./textures/BaseTexture";
import { RenderTexture as texturesRenderTexture_RenderTexture } from "./textures/RenderTexture";
import { BaseRenderTexture as texturesBaseRenderTexture_BaseRenderTexture } from "./textures/BaseRenderTexture";
import { VideoBaseTexture as texturesVideoBaseTexture_VideoBaseTexture } from "./textures/VideoBaseTexture";
import { TextureUvs as texturesTextureUvs_TextureUvs } from "./textures/TextureUvs";
import { CanvasRenderer as rendererscanvasCanvasRenderer_CanvasRenderer } from "./renderers/canvas/CanvasRenderer";
import {  CanvasRenderTarget as rendererscanvasutilsCanvasRenderTarget_CanvasRenderTarget, } from "./renderers/canvas/utils/CanvasRenderTarget";
import { Shader as Shader_Shader } from "./Shader";
import { WebGLRenderer as rendererswebglWebGLRenderer_WebGLRenderer } from "./renderers/webgl/WebGLRenderer";
import { WebGLManager as rendererswebglmanagersWebGLManager_WebGLManager } from "./renderers/webgl/managers/WebGLManager";
import { ObjectRenderer as rendererswebglutilsObjectRenderer_ObjectRenderer } from "./renderers/webgl/utils/ObjectRenderer";
import { RenderTarget as rendererswebglutilsRenderTarget_RenderTarget } from "./renderers/webgl/utils/RenderTarget";
import { Quad as rendererswebglutilsQuad_Quad } from "./renderers/webgl/utils/Quad";
import {  SpriteMaskFilter as rendererswebglfiltersspriteMaskSpriteMaskFilter_SpriteMaskFilter, } from "./renderers/webgl/filters/spriteMask/SpriteMaskFilter";
import { Filter as rendererswebglfiltersFilter_Filter } from "./renderers/webgl/filters/Filter";
import ext_pixiglcore from "pixi-gl-core";
"use strict";
var mod_core;
/**
 * @file        Main export of the PIXI core library
 * @author      Mat Groves <mat@goodboydigital.com>
 * @copyright   2013-2015 GoodBoyDigital
 * @license     {@link https://github.com/pixijs/pixi.js/blob/master/LICENSE|MIT License}
 */

/**
 * @namespace PIXI
 */
// export core and const. We assign core to const so that the non-reference types in const remain in-tact
var core = Object.assign(const_CONST, math_indexjs, {
    // utils
    utils: utils_utils,
    ticker: ticker_indexjs,

    // display
    DisplayObject:          displayDisplayObject_DisplayObject,
    Container:              displayContainer_Container,
    Transform:              displayTransform_Transform,
    TransformStatic:        displayTransformStatic_TransformStatic,
    TransformBase:          displayTransformBase_TransformBase,

    // sprites
    Sprite:                 spritesSprite_Sprite,
    CanvasSpriteRenderer:     spritescanvasCanvasSpriteRenderer_CanvasSpriteRenderer,
    CanvasTinter:           spritescanvasCanvasTinter_CanvasTinter,
    SpriteRenderer:         spriteswebglSpriteRenderer_SpriteRenderer,

    // text
    Text:                   textText_Text,
    TextStyle:              textTextStyle_TextStyle,
    // primitives
    Graphics:               graphicsGraphics_Graphics,
    GraphicsData:           graphicsGraphicsData_GraphicsData,
    GraphicsRenderer:       graphicswebglGraphicsRenderer_GraphicsRenderer,
    CanvasGraphicsRenderer: graphicscanvasCanvasGraphicsRenderer_CanvasGraphicsRenderer,

    // textures
    Texture:                texturesTexture_Texture,
    BaseTexture:            texturesBaseTexture_BaseTexture,
    RenderTexture:          texturesRenderTexture_RenderTexture,
    BaseRenderTexture:      texturesBaseRenderTexture_BaseRenderTexture,
    VideoBaseTexture:       texturesVideoBaseTexture_VideoBaseTexture,
    TextureUvs:             texturesTextureUvs_TextureUvs,

    // renderers - canvas
    CanvasRenderer:         rendererscanvasCanvasRenderer_CanvasRenderer,
    CanvasRenderTarget:     rendererscanvasutilsCanvasRenderTarget_CanvasRenderTarget,

    // renderers - webgl
    Shader:                 Shader_Shader,
    WebGLRenderer:          rendererswebglWebGLRenderer_WebGLRenderer,
    WebGLManager:           rendererswebglmanagersWebGLManager_WebGLManager,
    ObjectRenderer:         rendererswebglutilsObjectRenderer_ObjectRenderer,
    RenderTarget:           rendererswebglutilsRenderTarget_RenderTarget,
    Quad:                   rendererswebglutilsQuad_Quad,

    // filters - webgl
    SpriteMaskFilter:       rendererswebglfiltersspriteMaskSpriteMaskFilter_SpriteMaskFilter,
    Filter:                 rendererswebglfiltersFilter_Filter,

    glCore:                   ext_pixiglcore,

    /**
     * This helper function will automatically detect which renderer you should be using.
     * WebGL is the preferred renderer as it is a lot faster. If webGL is not supported by
     * the browser then this function will return a canvas renderer
     *
     * @memberof PIXI
     * @param width=800 {number} the width of the renderers view
     * @param height=600 {number} the height of the renderers view
     * @param [options] {object} The optional renderer parameters
     * @param [options.view] {HTMLCanvasElement} the canvas to use as a view, optional
     * @param [options.transparent=false] {boolean} If the render view is transparent, default false
     * @param [options.antialias=false] {boolean} sets antialias (only applicable in chrome at the moment)
     * @param [options.preserveDrawingBuffer=false] {boolean} enables drawing buffer preservation, enable this if you
     *      need to call toDataUrl on the webgl context
     * @param [options.resolution=1] {number} The resolution / device pixel ratio of the renderer, retina would be 2
     * @param [noWebGL=false] {boolean} prevents selection of WebGL renderer, even if such is present
     *
     * @return {WebGLRenderer|CanvasRenderer} Returns WebGL renderer if available, otherwise CanvasRenderer
     */
    autoDetectRenderer: function (width, height, options, noWebGL)
    {
        width = width || 800;
        height = height || 600;

        if (!noWebGL && core.utils.isWebGLSupported())
        {
            return new core.WebGLRenderer(width, height, options);
        }

        return new core.CanvasRenderer(width, height, options);
    }
});
mod_core = core;
export { mod_core as core };
