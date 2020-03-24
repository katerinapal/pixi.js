"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpriteMaskFilter = undefined;

var _Filter = require("../Filter");

var _math = require("../../../../math");

var _glslify = require("glslify");

var _glslify2 = _interopRequireDefault(_glslify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SpriteMaskFilter(sprite) {
    var maskMatrix = new _math.indexjs.Matrix();

    _Filter.Filter.call(this, (0, _glslify2.default)('./spriteMaskFilter.vert'), (0, _glslify2.default)('./spriteMaskFilter.frag'));

    sprite.renderable = false;

    this.maskSprite = sprite;
    this.maskMatrix = maskMatrix;
}

SpriteMaskFilter.prototype = Object.create(_Filter.Filter.prototype);
SpriteMaskFilter.prototype.constructor = SpriteMaskFilter;

/**
 * Applies the filter
 *
 * @param filterManager {PIXI.FilterManager} The renderer to retrieve the filter from
 * @param input {PIXI.RenderTarget}
 * @param output {PIXI.RenderTarget}
 */
SpriteMaskFilter.prototype.apply = function (filterManager, input, output) {
    var maskSprite = this.maskSprite;

    this.uniforms.mask = maskSprite._texture;
    this.uniforms.otherMatrix = filterManager.calculateSpriteMatrix(this.maskMatrix, maskSprite);
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
exports.SpriteMaskFilter = exported_SpriteMaskFilter;
