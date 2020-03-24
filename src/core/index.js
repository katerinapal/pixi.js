"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.core = undefined;

var _const = require("./const");

var const_core = _interopRequireWildcard(_const);

var _math = require("./math");

var math_obj = _interopRequireWildcard(_math);

var _utils = require("./utils");

var utils_core = _interopRequireWildcard(_utils);

var _ticker = require("./ticker");

var ticker_obj = _interopRequireWildcard(_ticker);

var _DisplayObject = require("./display/DisplayObject");

var _Container = require("./display/Container");

var _Transform = require("./display/Transform");

var _TransformStatic = require("./display/TransformStatic");

var _TransformBase = require("./display/TransformBase");

var _Sprite = require("./sprites/Sprite");

var _CanvasSpriteRenderer = require("./sprites/canvas/CanvasSpriteRenderer");

var _CanvasTinter = require("./sprites/canvas/CanvasTinter");

var spritescanvasCanvasTinter_core = _interopRequireWildcard(_CanvasTinter);

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

var rendererswebglfiltersFilter_core = _interopRequireWildcard(_Filter);

var _pixiGlCore = require("pixi-gl-core");

var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
    DisplayObject: _DisplayObject.core,
    Container: _Container.core,
    Transform: _Transform.core,
    TransformStatic: _TransformStatic.core,
    TransformBase: _TransformBase.core,

    // sprites
    Sprite: _Sprite.core,
    CanvasSpriteRenderer: _CanvasSpriteRenderer.core,
    CanvasTinter: spritescanvasCanvasTinter_core,
    SpriteRenderer: _SpriteRenderer.core,

    // text
    Text: _Text.core,
    TextStyle: _TextStyle.core,
    // primitives
    Graphics: _Graphics.core,
    GraphicsData: _GraphicsData.core,
    GraphicsRenderer: _GraphicsRenderer.core,
    CanvasGraphicsRenderer: _CanvasGraphicsRenderer.core,

    // textures
    Texture: _Texture.core,
    BaseTexture: _BaseTexture.core,
    RenderTexture: _RenderTexture.core,
    BaseRenderTexture: _BaseRenderTexture.core,
    VideoBaseTexture: _VideoBaseTexture.core,
    TextureUvs: _TextureUvs.core,

    // renderers - canvas
    CanvasRenderer: _CanvasRenderer.core,
    CanvasRenderTarget: _CanvasRenderTarget.core,

    // renderers - webgl
    Shader: _Shader.core,
    WebGLRenderer: _WebGLRenderer.core,
    WebGLManager: _WebGLManager.core,
    ObjectRenderer: _ObjectRenderer.core,
    RenderTarget: _RenderTarget.core,
    Quad: _Quad.core,

    // filters - webgl
    SpriteMaskFilter: _SpriteMaskFilter.core,
    Filter: rendererswebglfiltersFilter_core,

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

        if (!noWebGL && const_core.utils.isWebGLSupported()) {
            return new const_core.WebGLRenderer(width, height, options);
        }

        return new const_core.CanvasRenderer(width, height, options);
    }
});
var exported_core = core;
exports.core = exported_core;
