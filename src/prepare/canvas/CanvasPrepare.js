import { core as core_corejs } from "../../core";
function CanvasPrepare() {
}

CanvasPrepare.prototype.constructor = CanvasPrepare;

/**
 * Stub method for upload.
 * @param {Function|PIXI.DisplayObject|PIXI.Container} item Either
 *        the container or display object to search for items to upload or
 *        the callback function, if items have been added using `prepare.add`.
 * @param {Function} done When completed
 */
CanvasPrepare.prototype.upload = function(displayObject, done)
{
    if (typeof displayObject === 'function')
    {
        done = displayObject;
        displayObject = null;
    }
    done();
};

/**
 * Stub method for registering hooks.
 * @return {PIXI.CanvasPrepare} Instance of plugin for chaining.
 */
CanvasPrepare.prototype.register = function()
{
    return this;
};

/**
 * Stub method for adding items.
 * @return {PIXI.CanvasPrepare} Instance of plugin for chaining.
 */
CanvasPrepare.prototype.add = function()
{
    return this;
};

/**
 * Stub method for destroying plugin.
 */
CanvasPrepare.prototype.destroy = function()
{
};

core_corejs.CanvasRenderer.registerPlugin('prepare', CanvasPrepare);
var exported_CanvasPrepare = CanvasPrepare;

/**
 * Prepare uploads elements to the GPU. The CanvasRenderer version of prepare
 * provides the same APIs as the WebGL version, but doesn't do anything.
 * @class
 * @memberof PIXI
 * @param renderer {PIXI.CanvasRenderer} A reference to the current renderer
 */
export { exported_CanvasPrepare as CanvasPrepare };