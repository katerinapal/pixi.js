var mod_NoiseFilter = NoiseFilter;
import { core as core_core } from "../../core";
import ext_glslify_glslify from "glslify";
"use strict";

/**
 * @author Vico @vicocotea
 * original filter: https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/noise.js
 */

/**
 * A Noise effect filter.
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI.filters
 */
function NoiseFilter()
{
    core_core.Filter.call(this,
        // vertex shader
        ext_glslify_glslify('../fragments/default.vert'),
        // fragment shader
        ext_glslify_glslify('./noise.frag')
    );

    this.noise = 0.5;
}

NoiseFilter.prototype = Object.create(core_core.Filter.prototype);
NoiseFilter.prototype.constructor = NoiseFilter;

Object.defineProperties(NoiseFilter.prototype, {
    /**
     * The amount of noise to apply.
     *
     * @member {number}
     * @memberof PIXI.filters.NoiseFilter#
     * @default 0.5
     */
    noise: {
        get: function ()
        {
            return this.uniforms.noise;
        },
        set: function (value)
        {
            this.uniforms.noise = value;
        }
    }
});

/**
 * @author Vico @vicocotea
 * original filter: https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/noise.js
 */

/**
 * A Noise effect filter.
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI.filters
 */
export { mod_NoiseFilter as NoiseFilter };
