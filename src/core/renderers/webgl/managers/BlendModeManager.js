import { WebGLManager as WebGLManager_WebGLManagerjs } from "./WebGLManager";

/**
 * @class
 * @memberof PIXI
 * @extends PIXI.WebGLManager
 * @param renderer {PIXI.WebGLRenderer} The renderer this manager works for.
 */
function BlendModeManager(renderer)
{
    WebGLManager_WebGLManagerjs.call(this, renderer);

    /**
     * @member {number}
     */
    this.currentBlendMode = 99999;
}

BlendModeManager.prototype = Object.create(WebGLManager_WebGLManagerjs.prototype);
BlendModeManager.prototype.constructor = BlendModeManager;
var encapsulated_BlendModeManager;
encapsulated_BlendModeManager = BlendModeManager;

/**
 * Sets-up the given blendMode from WebGL's point of view.
 *
 * @param blendMode {number} the blendMode, should be a Pixi const, such as `PIXI.BLEND_MODES.ADD`. See
 *  {@link PIXI.BLEND_MODES} for possible values.
 */
BlendModeManager.prototype.setBlendMode = function (blendMode)
{
    if (this.currentBlendMode === blendMode)
    {
        return false;
    }

    this.currentBlendMode = blendMode;

    var mode = this.renderer.blendModes[this.currentBlendMode];
    this.renderer.gl.blendFunc(mode[0], mode[1]);

    return true;
};
