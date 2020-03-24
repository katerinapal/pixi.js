import { core as core_corejs } from "../../core";
import glslify from "glslify";
function VoidFilter() {
    core_corejs.Filter.call(this,
        // vertex shader
        glslify('../fragments/default.vert'),
        // fragment shader
        glslify('./void.frag')
    );

    this.glShaderKey = 'void';
}

VoidFilter.prototype = Object.create(core_corejs.Filter.prototype);
VoidFilter.prototype.constructor = VoidFilter;
var exported_VoidFilter = VoidFilter;

/**
 * Does nothing. Very handy.
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI.filters
 */
export { exported_VoidFilter as VoidFilter };
