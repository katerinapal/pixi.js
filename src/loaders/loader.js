var mod_Loader = Loader;
import ext_ResourceLoader from "resource-loader";
import { textureParser as textureParser_textureParser } from "./textureParser";
import { spritesheetParser as spritesheetParser_spritesheetParser } from "./spritesheetParser";
import { bitmapFontParser as bitmapFontParser_bitmapFontParser } from "./bitmapFontParser";
"use strict";

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
function Loader(baseUrl, concurrency)
{
    ext_ResourceLoader.call(this, baseUrl, concurrency);

    for (var i = 0; i < Loader._pixiMiddleware.length; ++i) {
        this.use(Loader._pixiMiddleware[i]());
    }
}

Loader.prototype = Object.create(ext_ResourceLoader.prototype);
Loader.prototype.constructor = Loader;

Loader._pixiMiddleware = [
    // parse any blob into more usable objects (e.g. Image)
    ext_ResourceLoader.middleware.parsing.blob,
    textureParser_textureParser,
    spritesheetParser_spritesheetParser,
    bitmapFontParser_bitmapFontParser
];

Loader.addPixiMiddleware = function (fn) {
    Loader._pixiMiddleware.push(fn);
};

// Add custom extentions
var Resource = ext_ResourceLoader.Resource;

Resource.setExtensionXhrType('fnt', Resource.XHR_RESPONSE_TYPE.DOCUMENT);

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
export { mod_Loader as Loader };
