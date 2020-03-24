import { core as core_corejs } from "../../core";
import { BlurXFilter as BlurXFilter_BlurXFilterjs } from "./BlurXFilter";
import { BlurYFilter as BlurYFilter_BlurYFilterjs } from "./BlurYFilter";
function BlurFilter(strength, quality, resolution) {
    core_corejs.Filter.call(this);

    this.blurXFilter = new BlurXFilter_BlurXFilterjs();
    this.blurYFilter = new BlurYFilter_BlurYFilterjs();
    this.resolution = 1;

    this.padding = 0;
    this.resolution = resolution || 1;
    this.quality = quality || 4;
    this.blur = strength || 8;
}

BlurFilter.prototype = Object.create(core_corejs.Filter.prototype);
BlurFilter.prototype.constructor = BlurFilter;

BlurFilter.prototype.apply = function (filterManager, input, output)
{

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
        get: function ()
        {
            return this.blurXFilter.blur;
        },
        set: function (value)
        {
            this.blurXFilter.blur = this.blurYFilter.blur = value;
            this.padding = Math.max( Math.abs(this.blurYFilter.strength),  Math.abs(this.blurYFilter.strength)) * 2;
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
        get: function ()
        {
            return  this.blurXFilter.quality;
        },
        set: function (value)
        {

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
        get: function ()
        {
            return this.blurXFilter.blur;
        },
        set: function (value)
        {
            this.blurXFilter.blur = value;
            this.padding = Math.max( Math.abs(this.blurYFilter.strength),  Math.abs(this.blurYFilter.strength)) * 2;
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
        get: function ()
        {
            return this.blurYFilter.blur;
        },
        set: function (value)
        {
            this.blurYFilter.blur = value;
            this.padding = Math.max( Math.abs(this.blurYFilter.strength),  Math.abs(this.blurYFilter.strength)) * 2;
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
export { exported_BlurFilter as BlurFilter };
