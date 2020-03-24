import { ObjectRenderer as rendererswebglutilsObjectRenderer_ObjectRendererjs } from "../../renderers/webgl/utils/ObjectRenderer";
import { WebGLRenderer as rendererswebglWebGLRenderer_WebGLRendererjs } from "../../renderers/webgl/WebGLRenderer";
import { WebGLGraphicsData as WebGLGraphicsData_WebGLGraphicsDatajs } from "./WebGLGraphicsData";
import { PrimitiveShader as shadersPrimitiveShader_PrimitiveShaderjs } from "./shaders/PrimitiveShader";
import { buildPoly as utilsbuildPoly_buildPolyjs } from "./utils/buildPoly";
import { buildRectangle as utilsbuildRectangle_buildRectanglejs } from "./utils/buildRectangle";
import {     buildRoundedRectangle as utilsbuildRoundedRectangle_buildRoundedRectanglejs, } from "./utils/buildRoundedRectangle";
import { buildCircle as utilsbuildCircle_buildCirclejs } from "./utils/buildCircle";
function GraphicsRenderer(renderer) {
    rendererswebglutilsObjectRenderer_ObjectRendererjs.call(this, renderer);

    this.graphicsDataPool = [];

    this.primitiveShader = null;

    this.gl = renderer.gl;

    // easy access!
    this.CONTEXT_UID = 0;
}

GraphicsRenderer.prototype = Object.create(rendererswebglutilsObjectRenderer_ObjectRendererjs.prototype);
GraphicsRenderer.prototype.constructor = GraphicsRenderer;

rendererswebglWebGLRenderer_WebGLRendererjs.registerPlugin('graphics', GraphicsRenderer);

/**
 * Called when there is a WebGL context change
 *
 * @private
 *
 */
GraphicsRenderer.prototype.onContextChange = function()
{
    this.gl = this.renderer.gl;
    this.CONTEXT_UID = this.renderer.CONTEXT_UID;
    this.primitiveShader = new shadersPrimitiveShader_PrimitiveShaderjs(this.gl);
};

/**
 * Destroys this renderer.
 *
 */
GraphicsRenderer.prototype.destroy = function ()
{
    rendererswebglutilsObjectRenderer_ObjectRendererjs.prototype.destroy.call(this);

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
GraphicsRenderer.prototype.render = function(graphics)
{
    var renderer = this.renderer;
    var gl = renderer.gl;

    var webGLData;

    var webGL = graphics._webGL[this.CONTEXT_UID];

    if (!webGL || graphics.dirty !== webGL.dirty )
    {

        this.updateGraphics(graphics);

        webGL = graphics._webGL[this.CONTEXT_UID];
    }



    // This  could be speeded up for sure!
    var shader = this.primitiveShader;
    renderer.bindShader(shader);
    renderer.state.setBlendMode( graphics.blendMode );

    for (var i = 0, n = webGL.data.length; i < n; i++)
    {
        webGLData = webGL.data[i];
        var shaderTemp = webGLData.shader;

        renderer.bindShader(shaderTemp);
        shaderTemp.uniforms.translationMatrix = graphics.transform.worldTransform.toArray(true);
        shaderTemp.uniforms.tint = utils.hex2rgb(graphics.tint);
        shaderTemp.uniforms.alpha = graphics.worldAlpha;

        webGLData.vao.bind()
        .draw(gl.TRIANGLE_STRIP,  webGLData.indices.length)
        .unbind();
    }
};

/**
 * Updates the graphics object
 *
 * @private
 * @param graphics {PIXI.Graphics} The graphics object to update
 */
GraphicsRenderer.prototype.updateGraphics = function(graphics)
{
    var gl = this.renderer.gl;

     // get the contexts graphics object
    var webGL = graphics._webGL[this.CONTEXT_UID];

    // if the graphics object does not exist in the webGL context time to create it!
    if (!webGL)
    {
        webGL = graphics._webGL[this.CONTEXT_UID] = {lastIndex:0, data:[], gl:gl, clearDirty:-1, dirty:-1};

    }

    // flag the graphics as not dirty as we are about to update it...
    webGL.dirty = graphics.dirty;

    var i;

    // if the user cleared the graphics object we will need to clear every object
    if (graphics.clearDirty !== webGL.clearDirty)
    {
        webGL.clearDirty = graphics.clearDirty;

        // loop through and return all the webGLDatas to the object pool so than can be reused later on
        for (i = 0; i < webGL.data.length; i++)
        {
            var graphicsData = webGL.data[i];
            this.graphicsDataPool.push( graphicsData );
        }

        // clear the array and reset the index..
        webGL.data = [];
        webGL.lastIndex = 0;
    }

    var webGLData;

    // loop through the graphics datas and construct each one..
    // if the object is a complex fill then the new stencil buffer technique will be used
    // other wise graphics objects will be pushed into a batch..
    for (i = webGL.lastIndex; i < graphics.graphicsData.length; i++)
    {
        var data = graphics.graphicsData[i];

        //TODO - this can be simplified
        webGLData = this.getWebGLData(webGL, 0);

        if (data.type === CONST.SHAPES.POLY)
        {
            utilsbuildPoly_buildPolyjs(data, webGLData);
        }
        if (data.type === CONST.SHAPES.RECT)
        {
            utilsbuildRectangle_buildRectanglejs(data, webGLData);
        }
        else if (data.type === CONST.SHAPES.CIRC || data.type === CONST.SHAPES.ELIP)
        {
            utilsbuildCircle_buildCirclejs(data, webGLData);
        }
        else if (data.type === CONST.SHAPES.RREC)
        {
            utilsbuildRoundedRectangle_buildRoundedRectanglejs(data, webGLData);
        }

        webGL.lastIndex++;
    }

    // upload all the dirty data...
    for (i = 0; i < webGL.data.length; i++)
    {
        webGLData = webGL.data[i];

        if (webGLData.dirty)
        {
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
GraphicsRenderer.prototype.getWebGLData = function (webGL, type)
{
    var webGLData = webGL.data[webGL.data.length-1];

    if (!webGLData || webGLData.points.length > 320000)
    {
        webGLData = this.graphicsDataPool.pop() || new WebGLGraphicsData_WebGLGraphicsDatajs(this.renderer.gl, this.primitiveShader, this.renderer.state.attribsState);
        webGLData.reset(type);
        webGL.data.push(webGLData);
    }

    webGLData.dirty = true;

    return webGLData;
};
var exported_GraphicsRenderer = GraphicsRenderer;

/**
 * Renders the graphics object.
 *
 * @class
 * @memberof PIXI
 * @extends PIXI.ObjectRenderer
 * @param renderer {PIXI.WebGLRenderer} The renderer this object renderer works for.
 */
export { exported_GraphicsRenderer as GraphicsRenderer };
