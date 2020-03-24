import ResourceLoader from "resource-loader";
import { textureParserjs as textureParser_textureParserjsjs } from "./textureParser";
import { spritesheetParserjs as spritesheetParser_spritesheetParserjsjs } from "./spritesheetParser";
import { bitmapFontParserjs as bitmapFontParser_bitmapFontParserjsjs } from "./bitmapFontParser";
function Loader(baseUrl, concurrency) {
    ResourceLoader.call(this, baseUrl, concurrency);

    for (var i = 0; i < Loader._pixiMiddleware.length; ++i) {
        this.use(Loader._pixiMiddleware[i]());
    }
}

Loader.prototype = Object.create(ResourceLoader.prototype);
Loader.prototype.constructor = Loader;

Loader._pixiMiddleware = [
    // parse any blob into more usable objects (e.g. Image)
    ResourceLoader.middleware.parsing.blob,
    textureParser_textureParserjsjs,
    spritesheetParser_spritesheetParserjsjs,
    bitmapFontParser_bitmapFontParserjsjs
];

Loader.addPixiMiddleware = function (fn) {
    Loader._pixiMiddleware.push(fn);
};

// Add custom extentions
var Resource = ResourceLoader.Resource;

Resource.setExtensionXhrType('fnt', Resource.XHR_RESPONSE_TYPE.DOCUMENT);
var exported_Loader = Loader;

/**
 *
 * The new loader, extends Resource Loader by Chad Engler : https://github.com/englercj/resource-loader
 *
 * ```js
 * var loader = PIXI.loader; // pixi exposes a premade instance for you to use.
 * //or
 * var loader = new PIXI.loaders.Loader(); // you can also create your own if you want
 *
 * loader.add('bunny',"data/bunny.png");
 *
 * loader.once('complete',onAssetsLoaded);
 *
 * loader.load();
 * ```
 *
 * @class
 * @extends module:resource-loader.ResourceLoader
 * @memberof PIXI.loaders
 * @param [baseUrl=''] {string} The base url for all resources loaded by this loader.
 * @param [concurrency=10] {number} The number of resources to load concurrently.
 * @see https://github.com/englercj/resource-loader
 */
export { exported_Loader as Loader };
