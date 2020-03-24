import { core as core_corejs } from "../../core";
import glslify from "glslify";
function FXAAFilter() {
    //TODO - needs work
    core_corejs.Filter.call(this,

        // vertex shader
        glslify('./fxaa.vert'),
        // fragment shader
        glslify('./fxaa.frag')
    );

}

FXAAFilter.prototype = Object.create(core_corejs.Filter.prototype);
FXAAFilter.prototype.constructor = FXAAFilter;

var exported_FXAAFilter = FXAAFilter;

/**
 *
 * Basic FXAA implementation based on the code on geeks3d.com with the
 * modification that the texture2DLod stuff was removed since it's
 * unsupported by WebGL.
 *
 * @see https://github.com/mitsuhiko/webgl-meincraft
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI
 *
 */
export { exported_FXAAFilter as FXAAFilter };
