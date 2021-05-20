"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TextureManager = undefined;

var _pixiGlCore = require("pixi-gl-core");

var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);

var _const = require("../../const");

var _RenderTarget = require("./utils/RenderTarget");

var _utils = require("../../utils");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

"use strict";
var GLTexture = _pixiGlCore2.default.GLTexture;

/**
 * Helper class to create a webGL Texture
 *
 * @class
 * @memberof PIXI
 * @param renderer {PIXI.WebGLRenderer} A reference to the current renderer
 */
var TextureManager = function TextureManager(renderer) {
    /**
     * A reference to the current renderer
     *
     * @member {PIXI.WebGLRenderer}
     */
    this.renderer = renderer;

    /**
     * The current WebGL rendering context
     *
     * @member {WebGLRenderingContext}
     */
    this.gl = renderer.gl;

    /**
        * Track textures in the renderer so we can no longer listen to them on destruction.
        *
        * @member {Array<*>}
        * @private
        */
    this._managedTextures = [];
};

TextureManager.prototype.bindTexture = function () {};

TextureManager.prototype.getTexture = function () {};

/**
 * Updates and/or Creates a WebGL texture for the renderer's context.
 *
 * @param texture {PIXI.BaseTexture|PIXI.Texture} the texture to update
 */
TextureManager.prototype.updateTexture = function (texture) {
    texture = texture.baseTexture || texture;

    var isRenderTexture = !!texture._glRenderTargets;

    if (!texture.hasLoaded) {
        return;
    }

    var glTexture = texture._glTextures[this.renderer.CONTEXT_UID];

    if (!glTexture) {
        if (isRenderTexture) {
            var renderTarget = new _RenderTarget.RenderTarget(this.gl, texture.width, texture.height, texture.scaleMode, texture.resolution);
            renderTarget.resize(texture.width, texture.height);
            texture._glRenderTargets[this.renderer.CONTEXT_UID] = renderTarget;
            glTexture = renderTarget.texture;
        } else {
            glTexture = new GLTexture(this.gl);
            glTexture.premultiplyAlpha = true;
            glTexture.upload(texture.source);
        }

        texture._glTextures[this.renderer.CONTEXT_UID] = glTexture;

        texture.on('update', this.updateTexture, this);
        texture.on('dispose', this.destroyTexture, this);

        this._managedTextures.push(texture);

        if (texture.isPowerOfTwo) {
            if (texture.mipmap) {
                glTexture.enableMipmap();
            }

            if (texture.wrapMode === _const.CONST.WRAP_MODES.CLAMP) {
                glTexture.enableWrapClamp();
            } else if (texture.wrapMode === _const.CONST.WRAP_MODES.REPEAT) {
                glTexture.enableWrapRepeat();
            } else {
                glTexture.enableWrapMirrorRepeat();
            }
        } else {
            glTexture.enableWrapClamp();
        }

        if (texture.scaleMode === _const.CONST.SCALE_MODES.NEAREST) {
            glTexture.enableNearestScaling();
        } else {
            glTexture.enableLinearScaling();
        }
    } else {
        // the textur ealrady exists so we only need to update it..
        if (isRenderTexture) {
            texture._glRenderTargets[this.renderer.CONTEXT_UID].resize(texture.width, texture.height);
        } else {
            glTexture.upload(texture.source);
        }
    }

    return glTexture;
};

/**
 * Deletes the texture from WebGL
 *
 * @param texture {PIXI.BaseTexture|PIXI.Texture} the texture to destroy
 * @param [skipRemove=false] {boolean} Whether to skip removing the texture from the TextureManager.
 */
TextureManager.prototype.destroyTexture = function (texture, skipRemove) {
    texture = texture.baseTexture || texture;

    if (!texture.hasLoaded) {
        return;
    }

    if (texture._glTextures[this.renderer.CONTEXT_UID]) {
        texture._glTextures[this.renderer.CONTEXT_UID].destroy();
        texture.off('update', this.updateTexture, this);
        texture.off('dispose', this.destroyTexture, this);

        delete texture._glTextures[this.renderer.CONTEXT_UID];

        if (!skipRemove) {
            var i = this._managedTextures.indexOf(texture);
            if (i !== -1) {
                _utils.utils.removeItems(this._managedTextures, i, 1);
            }
        }
    }
};

/**
 * Deletes all the textures from WebGL
 */
TextureManager.prototype.removeAll = function () {
    // empty all the old gl textures as they are useless now
    for (var i = 0; i < this._managedTextures.length; ++i) {
        var texture = this._managedTextures[i];
        if (texture._glTextures[this.renderer.CONTEXT_UID]) {
            delete texture._glTextures[this.renderer.CONTEXT_UID];
        }
    }
};

/**
 * Destroys this manager and removes all its textures
 */
TextureManager.prototype.destroy = function () {
    // destroy managed textures
    for (var i = 0; i < this._managedTextures.length; ++i) {
        var texture = this._managedTextures[i];
        this.destroyTexture(texture, true);
        texture.off('update', this.updateTexture, this);
        texture.off('dispose', this.destroyTexture, this);
    }

    this._managedTextures = null;
};

var mod_TextureManager;

exports.TextureManager = mod_TextureManager = TextureManager;
exports.TextureManager = mod_TextureManager;