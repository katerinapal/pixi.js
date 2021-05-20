"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.textureParser = undefined;

var _core = require("../core");

"use strict";

var mod_anonymus = function mod_anonymus() {
    return function (resource, next) {
        // create a new texture if the data is an Image object
        if (resource.data && resource.isImage) {
            var baseTexture = new _core.core.BaseTexture(resource.data, null, _core.core.utils.getResolutionOfUrl(resource.url));
            baseTexture.imageUrl = resource.url;
            resource.texture = new _core.core.Texture(baseTexture);
            // lets also add the frame to pixi's global cache for fromFrame and fromImage fucntions
            _core.core.utils.BaseTextureCache[resource.url] = baseTexture;
            _core.core.utils.TextureCache[resource.url] = resource.texture;
        }

        next();
    };
};

exports.textureParser = mod_anonymus = function mod_anonymus() {
    return function (resource, next) {
        // create a new texture if the data is an Image object
        if (resource.data && resource.isImage) {
            var baseTexture = new _core.core.BaseTexture(resource.data, null, _core.core.utils.getResolutionOfUrl(resource.url));
            baseTexture.imageUrl = resource.url;
            resource.texture = new _core.core.Texture(baseTexture);
            // lets also add the frame to pixi's global cache for fromFrame and fromImage fucntions
            _core.core.utils.BaseTextureCache[resource.url] = baseTexture;
            _core.core.utils.TextureCache[resource.url] = resource.texture;
        }

        next();
    };
};
exports.textureParser = mod_anonymus;