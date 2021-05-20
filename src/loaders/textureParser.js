import { core as core_core } from "../core";
"use strict";

var mod_anonymus = function ()
{
    return function (resource, next)
    {
        // create a new texture if the data is an Image object
        if (resource.data && resource.isImage)
        {
            var baseTexture = new core_core.BaseTexture(resource.data, null, core_core.utils.getResolutionOfUrl(resource.url));
            baseTexture.imageUrl = resource.url;
            resource.texture = new core_core.Texture(baseTexture);
            // lets also add the frame to pixi's global cache for fromFrame and fromImage fucntions
            core_core.utils.BaseTextureCache[resource.url] = baseTexture;
            core_core.utils.TextureCache[resource.url] = resource.texture;
        }

        next();
    };
};

mod_anonymus = function ()
{
    return function (resource, next)
    {
        // create a new texture if the data is an Image object
        if (resource.data && resource.isImage)
        {
            var baseTexture = new core_core.BaseTexture(resource.data, null, core_core.utils.getResolutionOfUrl(resource.url));
            baseTexture.imageUrl = resource.url;
            resource.texture = new core_core.Texture(baseTexture);
            // lets also add the frame to pixi's global cache for fromFrame and fromImage fucntions
            core_core.utils.BaseTextureCache[resource.url] = baseTexture;
            core_core.utils.TextureCache[resource.url] = resource.texture;
        }

        next();
    };
};
export { mod_anonymus as textureParser };
