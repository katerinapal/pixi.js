"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.core = undefined;

var _const = require("./const");

var _math = require("./math");

var _utils = require("./utils");

var _ticker = require("./ticker");

var _DisplayObject = require("./display/DisplayObject");

var _Container = require("./display/Container");

var _Transform = require("./display/Transform");

var _TransformStatic = require("./display/TransformStatic");

var _TransformBase = require("./display/TransformBase");

var _Sprite = require("./sprites/Sprite");

var _CanvasSpriteRenderer = require("./sprites/canvas/CanvasSpriteRenderer");

var _CanvasTinter = require("./sprites/canvas/CanvasTinter");

var _SpriteRenderer = require("./sprites/webgl/SpriteRenderer");

var _Text = require("./text/Text");

var _TextStyle = require("./text/TextStyle");

var _Graphics = require("./graphics/Graphics");

var _GraphicsData = require("./graphics/GraphicsData");

var _GraphicsRenderer = require("./graphics/webgl/GraphicsRenderer");

var _CanvasGraphicsRenderer = require("./graphics/canvas/CanvasGraphicsRenderer");

var _Texture = require("./textures/Texture");

var _BaseTexture = require("./textures/BaseTexture");

var _RenderTexture = require("./textures/RenderTexture");

var _BaseRenderTexture = require("./textures/BaseRenderTexture");

var _VideoBaseTexture = require("./textures/VideoBaseTexture");

var _TextureUvs = require("./textures/TextureUvs");

var _CanvasRenderer = require("./renderers/canvas/CanvasRenderer");

var _CanvasRenderTarget = require("./renderers/canvas/utils/CanvasRenderTarget");

var _Shader = require("./Shader");

var _WebGLRenderer = require("./renderers/webgl/WebGLRenderer");

var _WebGLManager = require("./renderers/webgl/managers/WebGLManager");

var _ObjectRenderer = require("./renderers/webgl/utils/ObjectRenderer");

var _RenderTarget = require("./renderers/webgl/utils/RenderTarget");

var _Quad = require("./renderers/webgl/utils/Quad");

var _SpriteMaskFilter = require("./renderers/webgl/filters/spriteMask/SpriteMaskFilter");

var _Filter = require("./renderers/webgl/filters/Filter");

var _pixiGlCore = require("pixi-gl-core");

var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

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
var core = Object.assign(_const.CONST, _math.indexjs, {
    // utils
    utils: _utils.utils,
    ticker: _ticker.indexjs,

    // display
    DisplayObject: _DisplayObject.DisplayObject,
    Container: _Container.Container,
    Transform: _Transform.Transform,
    TransformStatic: _TransformStatic.TransformStatic,
    TransformBase: _TransformBase.TransformBase,

    // sprites
    Sprite: _Sprite.Sprite,
    CanvasSpriteRenderer: _CanvasSpriteRenderer.CanvasSpriteRenderer,
    CanvasTinter: _CanvasTinter.CanvasTinter,
    SpriteRenderer: _SpriteRenderer.SpriteRenderer,

    // text
    Text: _Text.Text,
    TextStyle: _TextStyle.TextStyle,
    // primitives
    Graphics: _Graphics.Graphics,
    GraphicsData: _GraphicsData.GraphicsData,
    GraphicsRenderer: _GraphicsRenderer.GraphicsRenderer,
    CanvasGraphicsRenderer: _CanvasGraphicsRenderer.CanvasGraphicsRenderer,

    // textures
    Texture: _Texture.Texture,
    BaseTexture: _BaseTexture.BaseTexture,
    RenderTexture: _RenderTexture.RenderTexture,
    BaseRenderTexture: _BaseRenderTexture.BaseRenderTexture,
    VideoBaseTexture: _VideoBaseTexture.VideoBaseTexture,
    TextureUvs: _TextureUvs.TextureUvs,

    // renderers - canvas
    CanvasRenderer: _CanvasRenderer.CanvasRenderer,
    CanvasRenderTarget: _CanvasRenderTarget.CanvasRenderTarget,

    // renderers - webgl
    Shader: _Shader.Shader,
    WebGLRenderer: _WebGLRenderer.WebGLRenderer,
    WebGLManager: _WebGLManager.WebGLManager,
    ObjectRenderer: _ObjectRenderer.ObjectRenderer,
    RenderTarget: _RenderTarget.RenderTarget,
    Quad: _Quad.Quad,

    // filters - webgl
    SpriteMaskFilter: _SpriteMaskFilter.SpriteMaskFilter,
    Filter: _Filter.Filter,

    glCore: _pixiGlCore2.default,

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
    autoDetectRenderer: function autoDetectRenderer(width, height, options, noWebGL) {
        width = width || 800;
        height = height || 600;

        if (!noWebGL && core.utils.isWebGLSupported()) {
            return new core.WebGLRenderer(width, height, options);
        }

        return new core.CanvasRenderer(width, height, options);
    }
});
exports.core = mod_core = core;
exports.core = mod_core;