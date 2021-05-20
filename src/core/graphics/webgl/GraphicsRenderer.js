"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphicsRenderer = undefined;

var _utils = require("../../utils");

var _const = require("../../const");

var _ObjectRenderer = require("../../renderers/webgl/utils/ObjectRenderer");

var _WebGLRenderer = require("../../renderers/webgl/WebGLRenderer");

var _WebGLGraphicsData = require("./WebGLGraphicsData");

var _PrimitiveShader = require("./shaders/PrimitiveShader");

var _buildPoly = require("./utils/buildPoly");

var _buildRectangle = require("./utils/buildRectangle");

var _buildRoundedRectangle = require("./utils/buildRoundedRectangle");

var _buildCircle = require("./utils/buildCircle");

var mod_GraphicsRenderer = GraphicsRenderer;

"use strict";

/**
 * Renders the graphics object.
 *
 * @class
 * @memberof PIXI
 * @extends PIXI.ObjectRenderer
 * @param renderer {PIXI.WebGLRenderer} The renderer this object renderer works for.
 */
function GraphicsRenderer(renderer) {
    _ObjectRenderer.ObjectRenderer.call(this, renderer);

    this.graphicsDataPool = [];

    this.primitiveShader = null;

    this.gl = renderer.gl;

    // easy access!
    this.CONTEXT_UID = 0;
}

GraphicsRenderer.prototype = Object.create(_ObjectRenderer.ObjectRenderer.prototype);
GraphicsRenderer.prototype.constructor = GraphicsRenderer;

_WebGLRenderer.WebGLRenderer.registerPlugin('graphics', GraphicsRenderer);

/**
 * Called when there is a WebGL context change
 *
 * @private
 *
 */
GraphicsRenderer.prototype.onContextChange = function () {
    this.gl = this.renderer.gl;
    this.CONTEXT_UID = this.renderer.CONTEXT_UID;
    this.primitiveShader = new _PrimitiveShader.PrimitiveShader(this.gl);
};

/**
 * Destroys this renderer.
 *
 */
GraphicsRenderer.prototype.destroy = function () {
    _ObjectRenderer.ObjectRenderer.prototype.destroy.call(this);

    for (var i = 0; i < this.graphicsDataPool.length; ++i) {
        this.graphicsDataPool[i].destroy();
    }

    this.graphicsDataPool = null;
};

/**
 * Renders a graphics object.
 *
 * @param graphics {PIXI.Graphics} The graphics object to render.
 */
GraphicsRenderer.prototype.render = function (graphics) {
    var renderer = this.renderer;
    var gl = renderer.gl;

    var webGLData;

    var webGL = graphics._webGL[this.CONTEXT_UID];

    if (!webGL || graphics.dirty !== webGL.dirty) {

        this.updateGraphics(graphics);

        webGL = graphics._webGL[this.CONTEXT_UID];
    }

    // This  could be speeded up for sure!
    var shader = this.primitiveShader;
    renderer.bindShader(shader);
    renderer.state.setBlendMode(graphics.blendMode);

    for (var i = 0, n = webGL.data.length; i < n; i++) {
        webGLData = webGL.data[i];
        var shaderTemp = webGLData.shader;

        renderer.bindShader(shaderTemp);
        shaderTemp.uniforms.translationMatrix = graphics.transform.worldTransform.toArray(true);
        shaderTemp.uniforms.tint = _utils.utils.hex2rgb(graphics.tint);
        shaderTemp.uniforms.alpha = graphics.worldAlpha;

        webGLData.vao.bind().draw(gl.TRIANGLE_STRIP, webGLData.indices.length).unbind();
    }
};

/**
 * Updates the graphics object
 *
 * @private
 * @param graphics {PIXI.Graphics} The graphics object to update
 */
GraphicsRenderer.prototype.updateGraphics = function (graphics) {
    var gl = this.renderer.gl;

    // get the contexts graphics object
    var webGL = graphics._webGL[this.CONTEXT_UID];

    // if the graphics object does not exist in the webGL context time to create it!
    if (!webGL) {
        webGL = graphics._webGL[this.CONTEXT_UID] = { lastIndex: 0, data: [], gl: gl, clearDirty: -1, dirty: -1 };
    }

    // flag the graphics as not dirty as we are about to update it...
    webGL.dirty = graphics.dirty;

    var i;

    // if the user cleared the graphics object we will need to clear every object
    if (graphics.clearDirty !== webGL.clearDirty) {
        webGL.clearDirty = graphics.clearDirty;

        // loop through and return all the webGLDatas to the object pool so than can be reused later on
        for (i = 0; i < webGL.data.length; i++) {
            var graphicsData = webGL.data[i];
            this.graphicsDataPool.push(graphicsData);
        }

        // clear the array and reset the index..
        webGL.data = [];
        webGL.lastIndex = 0;
    }

    var webGLData;

    // loop through the graphics datas and construct each one..
    // if the object is a complex fill then the new stencil buffer technique will be used
    // other wise graphics objects will be pushed into a batch..
    for (i = webGL.lastIndex; i < graphics.graphicsData.length; i++) {
        var data = graphics.graphicsData[i];

        //TODO - this can be simplified
        webGLData = this.getWebGLData(webGL, 0);

        if (data.type === _const.CONST.SHAPES.POLY) {
            (0, _buildPoly.buildPoly)(data, webGLData);
        }
        if (data.type === _const.CONST.SHAPES.RECT) {
            (0, _buildRectangle.buildRectangle)(data, webGLData);
        } else if (data.type === _const.CONST.SHAPES.CIRC || data.type === _const.CONST.SHAPES.ELIP) {
            (0, _buildCircle.buildCircle)(data, webGLData);
        } else if (data.type === _const.CONST.SHAPES.RREC) {
            (0, _buildRoundedRectangle.buildRoundedRectangle)(data, webGLData);
        }

        webGL.lastIndex++;
    }

    // upload all the dirty data...
    for (i = 0; i < webGL.data.length; i++) {
        webGLData = webGL.data[i];

        if (webGLData.dirty) {
            webGLData.upload();
        }
    }
};

/**
 *
 * @private
 * @param webGL {WebGLRenderingContext} the current WebGL drawing context
 * @param type {number} TODO @Alvin
 */
GraphicsRenderer.prototype.getWebGLData = function (webGL, type) {
    var webGLData = webGL.data[webGL.data.length - 1];

    if (!webGLData || webGLData.points.length > 320000) {
        webGLData = this.graphicsDataPool.pop() || new _WebGLGraphicsData.WebGLGraphicsData(this.renderer.gl, this.primitiveShader, this.renderer.state.attribsState);
        webGLData.reset(type);
        webGL.data.push(webGLData);
    }

    webGLData.dirty = true;

    return webGLData;
};

/**
 * Renders the graphics object.
 *
 * @class
 * @memberof PIXI
 * @extends PIXI.ObjectRenderer
 * @param renderer {PIXI.WebGLRenderer} The renderer this object renderer works for.
 */
exports.GraphicsRenderer = mod_GraphicsRenderer;