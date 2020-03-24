"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BlurXFilter = undefined;

var _core = require("../../core");

var _generateBlurVertSource = require("./generateBlurVertSource");

var _generateBlurFragSource = require("./generateBlurFragSource");

var _getMaxBlurKernelSize = require("./getMaxBlurKernelSize");

function BlurXFilter(strength, quality, resolution) {
    var vertSrc = (0, _generateBlurVertSource.generateVertBlurSource)(5, true);
    var fragSrc = (0, _generateBlurFragSource.generateFragBlurSource)(5);

    _core.core.Filter.call(this,
    // vertex shader
    vertSrc,
    // fragment shader
    fragSrc);

    this.resolution = resolution || 1;

    this._quality = 0;

    this.quality = quality || 4;
    this.strength = strength || 8;

    this.firstRun = true;
}

BlurXFilter.prototype = Object.create(_core.core.Filter.prototype);
BlurXFilter.prototype.constructor = BlurXFilter;

BlurXFilter.prototype.apply = function (filterManager, input, output, clear) {
    if (this.firstRun) {
        var gl = filterManager.renderer.gl;
        var kernelSize = (0, _getMaxBlurKernelSize.getMaxKernelSize)(gl);

        this.vertexSrc = (0, _generateBlurVertSource.generateVertBlurSource)(kernelSize, true);
        this.fragmentSrc = (0, _generateBlurFragSource.generateFragBlurSource)(kernelSize);

        this.firstRun = false;
    }

    this.uniforms.strength = 1 / output.size.width * (output.size.width / input.size.width); /// // *  2 //4//this.strength / 4 / this.passes * (input.frame.width / input.size.width);

    // screen space!
    this.uniforms.strength *= this.strength;
    this.uniforms.strength /= this.passes; // / this.passes//Math.pow(1, this.passes);

    if (this.passes === 1) {
        filterManager.applyFilter(this, input, output, clear);
    } else {
        var renderTarget = filterManager.getRenderTarget(true);
        var flip = input;
        var flop = renderTarget;

        for (var i = 0; i < this.passes - 1; i++) {
            filterManager.applyFilter(this, flip, flop, true);

            var temp = flop;
            flop = flip;
            flip = temp;
        }

        filterManager.applyFilter(this, flip, output, clear);

        filterManager.returnRenderTarget(renderTarget);
    }
};

Object.defineProperties(BlurXFilter.prototype, {
    /**
     * Sets the strength of both the blur.
     *
     * @member {number}
     * @memberof PIXI.filters.BlurXFilter#
     * @default 16
     */
    blur: {
        get: function get() {
            return this.strength;
        },
        set: function set(value) {
            this.padding = Math.abs(value) * 2;
            this.strength = value;
        }
    },

    /**
    * Sets the quality of the blur by modifying the number of passes. More passes means higher quaility bluring but the lower the performance.
    *
    * @member {number}
    * @memberof PIXI.filters.BlurXFilter#
    * @default 4
    */
    quality: {
        get: function get() {
            return this._quality;
        },
        set: function set(value) {
            this._quality = value;
            this.passes = value;
        }
    }
});
var exported_BlurXFilter = BlurXFilter;

/**
 * The BlurXFilter applies a horizontal Gaussian blur to an object.
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI.filters
 */
exports.BlurXFilter = exported_BlurXFilter;
