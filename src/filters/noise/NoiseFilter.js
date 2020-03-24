"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NoiseFilter = undefined;

var _core = require("../../core");

var _glslify = require("glslify");

var _glslify2 = _interopRequireDefault(_glslify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NoiseFilter() {
    _core.core.Filter.call(this,
    // vertex shader
    (0, _glslify2.default)('../fragments/default.vert'),
    // fragment shader
    (0, _glslify2.default)('./noise.frag'));

    this.noise = 0.5;
}

NoiseFilter.prototype = Object.create(_core.core.Filter.prototype);
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
        get: function get() {
            return this.uniforms.noise;
        },
        set: function set(value) {
            this.uniforms.noise = value;
        }
    }
});
var exported_NoiseFilter = NoiseFilter;

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
exports.NoiseFilter = exported_NoiseFilter;
