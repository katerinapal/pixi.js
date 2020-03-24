"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BlurFilter = undefined;

var _core = require("../../core");

var _BlurXFilter = require("./BlurXFilter");

var _BlurYFilter = require("./BlurYFilter");

function BlurFilter(strength, quality, resolution) {
    _core.core.Filter.call(this);

    this.blurXFilter = new _BlurXFilter.BlurXFilter();
    this.blurYFilter = new _BlurYFilter.BlurYFilter();
    this.resolution = 1;

    this.padding = 0;
    this.resolution = resolution || 1;
    this.quality = quality || 4;
    this.blur = strength || 8;
}

BlurFilter.prototype = Object.create(_core.core.Filter.prototype);
BlurFilter.prototype.constructor = BlurFilter;

BlurFilter.prototype.apply = function (filterManager, input, output) {

    var renderTarget = filterManager.getRenderTarget(true);

    this.blurXFilter.apply(filterManager, input, renderTarget, true);
    this.blurYFilter.apply(filterManager, renderTarget, output, false);

    filterManager.returnRenderTarget(renderTarget);
};

Object.defineProperties(BlurFilter.prototype, {
    /**
     * Sets the strength of both the blurX and blurY properties simultaneously
     *
     * @member {number}
     * @memberOf PIXI.filters.BlurFilter#
     * @default 2
     */
    blur: {
        get: function get() {
            return this.blurXFilter.blur;
        },
        set: function set(value) {
            this.blurXFilter.blur = this.blurYFilter.blur = value;
            this.padding = Math.max(Math.abs(this.blurYFilter.strength), Math.abs(this.blurYFilter.strength)) * 2;
        }
    },

    /**
     * Sets the number of passes for blur. More passes means higher quaility bluring.
     *
     * @member {number}
     * @memberof PIXI.filters.BlurYFilter#
     * @default 1
     */
    quality: {
        get: function get() {
            return this.blurXFilter.quality;
        },
        set: function set(value) {

            this.blurXFilter.quality = this.blurYFilter.quality = value;
        }
    },

    /**
     * Sets the strength of the blurX property
     *
     * @member {number}
     * @memberOf PIXI.filters.BlurFilter#
     * @default 2
     */
    blurX: {
        get: function get() {
            return this.blurXFilter.blur;
        },
        set: function set(value) {
            this.blurXFilter.blur = value;
            this.padding = Math.max(Math.abs(this.blurYFilter.strength), Math.abs(this.blurYFilter.strength)) * 2;
        }
    },

    /**
     * Sets the strength of the blurY property
     *
     * @member {number}
     * @memberOf PIXI.filters.BlurFilter#
     * @default 2
     */
    blurY: {
        get: function get() {
            return this.blurYFilter.blur;
        },
        set: function set(value) {
            this.blurYFilter.blur = value;
            this.padding = Math.max(Math.abs(this.blurYFilter.strength), Math.abs(this.blurYFilter.strength)) * 2;
        }
    }
});
var exported_BlurFilter = BlurFilter;

/**
 * The BlurFilter applies a Gaussian blur to an object.
 * The strength of the blur can be set for x- and y-axis separately.
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI.filters
 */
exports.BlurFilter = exported_BlurFilter;
