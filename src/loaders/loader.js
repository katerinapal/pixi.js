"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Loader = undefined;

var _resourceLoader = require("resource-loader");

var _resourceLoader2 = _interopRequireDefault(_resourceLoader);

var _textureParser = require("./textureParser");

var _spritesheetParser = require("./spritesheetParser");

var _bitmapFontParser = require("./bitmapFontParser");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var mod_Loader = Loader;

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
function Loader(baseUrl, concurrency) {
    _resourceLoader2.default.call(this, baseUrl, concurrency);

    for (var i = 0; i < Loader._pixiMiddleware.length; ++i) {
        this.use(Loader._pixiMiddleware[i]());
    }
}

Loader.prototype = Object.create(_resourceLoader2.default.prototype);
Loader.prototype.constructor = Loader;

Loader._pixiMiddleware = [
// parse any blob into more usable objects (e.g. Image)
_resourceLoader2.default.middleware.parsing.blob, _textureParser.textureParser, _spritesheetParser.spritesheetParser, _bitmapFontParser.bitmapFontParser];

Loader.addPixiMiddleware = function (fn) {
    Loader._pixiMiddleware.push(fn);
};

// Add custom extentions
var Resource = _resourceLoader2.default.Resource;

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
exports.Loader = mod_Loader;