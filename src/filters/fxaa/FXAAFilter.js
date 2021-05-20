var mod_FXAAFilter = FXAAFilter;
import { core as core_core } from "../../core";
import ext_glslify_glslify from "glslify";
"use strict";

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
function FXAAFilter()
{
    //TODO - needs work
    core_core.Filter.call(this,

        // vertex shader
        ext_glslify_glslify('./fxaa.vert'),
        // fragment shader
        ext_glslify_glslify('./fxaa.frag')
    );

}

FXAAFilter.prototype = Object.create(core_core.Filter.prototype);
FXAAFilter.prototype.constructor = FXAAFilter;

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
export { mod_FXAAFilter as FXAAFilter };
