import * as const_core from "./const";
import * as math_obj from "./math";
import * as utils_core from "./utils";
import * as ticker_obj from "./ticker";
import { core as displayDisplayObject_core } from "./display/DisplayObject";
import { core as displayContainer_core } from "./display/Container";
import { core as displayTransform_core } from "./display/Transform";
import { core as displayTransformStatic_core } from "./display/TransformStatic";
import { core as displayTransformBase_core } from "./display/TransformBase";
import { core as spritesSprite_core } from "./sprites/Sprite";
import { core as spritescanvasCanvasSpriteRenderer_core } from "./sprites/canvas/CanvasSpriteRenderer";
import * as spritescanvasCanvasTinter_core from "./sprites/canvas/CanvasTinter";
import { core as spriteswebglSpriteRenderer_core } from "./sprites/webgl/SpriteRenderer";
import { core as textText_core } from "./text/Text";
import { core as textTextStyle_core } from "./text/TextStyle";
import { core as graphicsGraphics_core } from "./graphics/Graphics";
import { core as graphicsGraphicsData_core } from "./graphics/GraphicsData";
import { core as graphicswebglGraphicsRenderer_core } from "./graphics/webgl/GraphicsRenderer";
import { core as graphicscanvasCanvasGraphicsRenderer_core } from "./graphics/canvas/CanvasGraphicsRenderer";
import { core as texturesTexture_core } from "./textures/Texture";
import { core as texturesBaseTexture_core } from "./textures/BaseTexture";
import { core as texturesRenderTexture_core } from "./textures/RenderTexture";
import { core as texturesBaseRenderTexture_core } from "./textures/BaseRenderTexture";
import { core as texturesVideoBaseTexture_core } from "./textures/VideoBaseTexture";
import { core as texturesTextureUvs_core } from "./textures/TextureUvs";
import { core as rendererscanvasCanvasRenderer_core } from "./renderers/canvas/CanvasRenderer";
import { core as rendererscanvasutilsCanvasRenderTarget_core } from "./renderers/canvas/utils/CanvasRenderTarget";
import { core as Shader_core } from "./Shader";
import { core as rendererswebglWebGLRenderer_core } from "./renderers/webgl/WebGLRenderer";
import { core as rendererswebglmanagersWebGLManager_core } from "./renderers/webgl/managers/WebGLManager";
import { core as rendererswebglutilsObjectRenderer_core } from "./renderers/webgl/utils/ObjectRenderer";
import { core as rendererswebglutilsRenderTarget_core } from "./renderers/webgl/utils/RenderTarget";
import { core as rendererswebglutilsQuad_core } from "./renderers/webgl/utils/Quad";
import { core as rendererswebglfiltersspriteMaskSpriteMaskFilter_core } from "./renderers/webgl/filters/spriteMask/SpriteMaskFilter";
import * as rendererswebglfiltersFilter_core from "./renderers/webgl/filters/Filter";
import pixiglcore from "pixi-gl-core";
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
var core = Object.assign(const_core, math_obj, {
    // utils
    utils: utils_core,
    ticker: ticker_obj,

    // display
    DisplayObject:          displayDisplayObject_core,
    Container:              displayContainer_core,
    Transform:              displayTransform_core,
    TransformStatic:        displayTransformStatic_core,
    TransformBase:          displayTransformBase_core,

    // sprites
    Sprite:                 spritesSprite_core,
    CanvasSpriteRenderer:     spritescanvasCanvasSpriteRenderer_core,
    CanvasTinter:           spritescanvasCanvasTinter_core,
    SpriteRenderer:         spriteswebglSpriteRenderer_core,

    // text
    Text:                   textText_core,
    TextStyle:              textTextStyle_core,
    // primitives
    Graphics:               graphicsGraphics_core,
    GraphicsData:           graphicsGraphicsData_core,
    GraphicsRenderer:       graphicswebglGraphicsRenderer_core,
    CanvasGraphicsRenderer: graphicscanvasCanvasGraphicsRenderer_core,

    // textures
    Texture:                texturesTexture_core,
    BaseTexture:            texturesBaseTexture_core,
    RenderTexture:          texturesRenderTexture_core,
    BaseRenderTexture:      texturesBaseRenderTexture_core,
    VideoBaseTexture:       texturesVideoBaseTexture_core,
    TextureUvs:             texturesTextureUvs_core,

    // renderers - canvas
    CanvasRenderer:         rendererscanvasCanvasRenderer_core,
    CanvasRenderTarget:     rendererscanvasutilsCanvasRenderTarget_core,

    // renderers - webgl
    Shader:                 Shader_core,
    WebGLRenderer:          rendererswebglWebGLRenderer_core,
    WebGLManager:           rendererswebglmanagersWebGLManager_core,
    ObjectRenderer:         rendererswebglutilsObjectRenderer_core,
    RenderTarget:           rendererswebglutilsRenderTarget_core,
    Quad:                   rendererswebglutilsQuad_core,

    // filters - webgl
    SpriteMaskFilter:       rendererswebglfiltersspriteMaskSpriteMaskFilter_core,
    Filter:                 rendererswebglfiltersFilter_core,

    glCore:                   pixiglcore,

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

        if (!noWebGL && const_core.utils.isWebGLSupported())
        {
            return new const_core.WebGLRenderer(width, height, options);
        }

        return new const_core.CanvasRenderer(width, height, options);
    }
});
var exported_core = core;
export { exported_core as core };
