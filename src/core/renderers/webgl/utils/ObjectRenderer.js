import { WebGLManager as managersWebGLManager_WebGLManagerjs } from "../managers/WebGLManager";
function ObjectRenderer(renderer) {
    managersWebGLManager_WebGLManagerjs.call(this, renderer);
}


ObjectRenderer.prototype = Object.create(managersWebGLManager_WebGLManagerjs.prototype);
ObjectRenderer.prototype.constructor = ObjectRenderer;

/**
 * Starts the renderer and sets the shader
 *
 */
ObjectRenderer.prototype.start = function ()
{
    // set the shader..
};

/**
 * Stops the renderer
 *
 */
ObjectRenderer.prototype.stop = function ()
{
    this.flush();
};

/**
 * Stub method for rendering content and emptying the current batch.
 *
 */
ObjectRenderer.prototype.flush = function ()
{
    // flush!
};

/**
 * Renders an object
 *
 * @param object {PIXI.DisplayObject} The object to render.
 */
ObjectRenderer.prototype.render = function (object) // jshint unused:false
{
    // render the object
};
var exported_ObjectRenderer = ObjectRenderer;

/**
 * Base for a common object renderer that can be used as a system renderer plugin.
 *
 * @class
 * @extends PIXI.WebGLManager
 * @memberof PIXI
 * @param renderer {PIXI.WebGLRenderer} The renderer this object renderer works for.
 */
export { exported_ObjectRenderer as ObjectRenderer };
