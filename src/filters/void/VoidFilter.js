var mod_VoidFilter = VoidFilter;
import { core as core_core } from "../../core";
import ext_glslify_glslify from "glslify";
"use strict";

/**
 * Does nothing. Very handy.
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI.filters
 */
function VoidFilter()
{
    core_core.Filter.call(this,
        // vertex shader
        ext_glslify_glslify('../fragments/default.vert'),
        // fragment shader
        ext_glslify_glslify('./void.frag')
    );

    this.glShaderKey = 'void';
}

VoidFilter.prototype = Object.create(core_core.Filter.prototype);
VoidFilter.prototype.constructor = VoidFilter;

/**
 * Does nothing. Very handy.
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI.filters
 */
export { mod_VoidFilter as VoidFilter };
