import { Filter as Filter_Filterjs } from "../Filter";
import { indexjs as math_indexjsjs } from "../../../../math";
import glslify from "glslify";
function SpriteMaskFilter(sprite) {
    var maskMatrix = new math_indexjsjs.Matrix();

    Filter_Filterjs.call(this,
        glslify('./spriteMaskFilter.vert'),
        glslify('./spriteMaskFilter.frag')
    );

    sprite.renderable = false;

    this.maskSprite = sprite;
    this.maskMatrix = maskMatrix;
}

SpriteMaskFilter.prototype = Object.create(Filter_Filterjs.prototype);
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
var exported_SpriteMaskFilter = SpriteMaskFilter;

/**
 * The SpriteMaskFilter class
 *
 * @class
 * @extends PIXI.Filter
 * @memberof PIXI
 * @param sprite {PIXI.Sprite} the target sprite
 */
export { exported_SpriteMaskFilter as SpriteMaskFilter };
