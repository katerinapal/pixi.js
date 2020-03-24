import { core as core_corejs } from "../core";

var exportedObject = function ()
{
    return function (resource, next)
    {
        // create a new texture if the data is an Image object
        if (resource.data && resource.isImage)
        {
            var baseTexture = new core_corejs.BaseTexture(resource.data, null, core_corejs.utils.getResolutionOfUrl(resource.url));
            baseTexture.imageUrl = resource.url;
            resource.texture = new core_corejs.Texture(baseTexture);
            // lets also add the frame to pixi's global cache for fromFrame and fromImage fucntions
            core_corejs.utils.BaseTextureCache[resource.url] = baseTexture;
            core_corejs.utils.TextureCache[resource.url] = resource.texture;
        }

        next();
    };
};

export { exportedObject as textureParserjs };;
