var mod_SpriteMaskFilter = SpriteMaskFilter;
import { Filter as Filter_Filter } from "../Filter";
import { indexjs as math } from "../../../../math";
import ext_glslify_glslify from "glslify";
"use strict";
/**
 * The SpriteMaskFilter class
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI
 * @param sprite {PIXI.Sprite} the target sprite
 */
function SpriteMaskFilter(sprite)
{
    var maskMatrix = new math.Matrix();

    Filter_Filter.call(this,
        ext_glslify_glslify('./spriteMaskFilter.vert'),
        ext_glslify_glslify('./spriteMaskFilter.frag')
    );

    sprite.renderable = false;

    this.maskSprite = sprite;
    this.maskMatrix = maskMatrix;
}

SpriteMaskFilter.prototype = Object.create(Filter_Filter.prototype);
SpriteMaskFilter.prototype.constructor = SpriteMaskFilter;

/**
 * Applies the filter
 *
 * @param filterManager {PIXI.FilterManager} The renderer to retrieve the filter from
 * @param input {PIXI.RenderTarget}
 * @param output {PIXI.RenderTarget}
 */
SpriteMaskFilter.prototype.apply = function (filterManager, input, output)
{
    var maskSprite = this.maskSprite;

    this.uniforms.mask = maskSprite._texture;
    this.uniforms.otherMatrix = filterManager.calculateSpriteMatrix(this.maskMatrix, maskSprite );
    this.uniforms.alpha = maskSprite.worldAlpha;

    filterManager.applyFilter(this, input, output);
};

/**
 * The SpriteMaskFilter class
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI
 * @param sprite {PIXI.Sprite} the target sprite
 */
export { mod_SpriteMaskFilter as SpriteMaskFilter };
