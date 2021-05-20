"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.utils = undefined;

var _const = require("../const");

var _eventemitter = require("eventemitter3");

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _pluginTarget = require("./pluginTarget");

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

"use strict";
var mod_utils;

/**
 * @namespace PIXI.utils
 */
var utils = {
    _uid: 0,
    _saidHello: false,

    EventEmitter: _eventemitter2.default,
    pluginTarget: _pluginTarget.pluginTargetjs,

    /**
     * Gets the next unique identifier
     *
     * @memberof PIXI.utils
     * @return {number} The next unique identifier to use.
     */
    uid: function uid() {
        return ++utils._uid;
    },

    /**
     * Converts a hex color number to an [R, G, B] array
     *
     * @memberof PIXI.utils
     * @param hex {number}
     * @param  {number[]} [out=[]] If supplied, this array will be used rather than returning a new one
     * @return {number[]} An array representing the [R, G, B] of the color.
     */
    hex2rgb: function hex2rgb(hex, out) {
        out = out || [];

        out[0] = (hex >> 16 & 0xFF) / 255;
        out[1] = (hex >> 8 & 0xFF) / 255;
        out[2] = (hex & 0xFF) / 255;

        return out;
    },

    /**
     * Converts a hex color number to a string.
     *
     * @memberof PIXI.utils
     * @param hex {number} Number in hex
     * @return {string} The string color.
     */
    hex2string: function hex2string(hex) {
        hex = hex.toString(16);
        hex = '000000'.substr(0, 6 - hex.length) + hex;

        return '#' + hex;
    },

    /**
     * Converts a color as an [R, G, B] array to a hex number
     *
     * @memberof PIXI.utils
     * @param rgb {number[]} rgb array
     * @return {number} The color number
     */
    rgb2hex: function rgb2hex(rgb) {
        return (rgb[0] * 255 << 16) + (rgb[1] * 255 << 8) + rgb[2] * 255;
    },

    /**
     * get the resolution / device pixel ratio of an asset by looking for the prefix
     * used by spritesheets and image urls
     *
     * @memberof PIXI.utils
     * @param url {string} the image path
     * @return {number} resolution / device pixel ratio of an asset
     */
    getResolutionOfUrl: function getResolutionOfUrl(url) {
        var resolution = _const.CONST.RETINA_PREFIX.exec(url);

        if (resolution) {
            return parseFloat(resolution[1]);
        }

        return 1;
    },

    /**
     * Logs out the version and renderer information for this running instance of PIXI.
     * If you don't want to see this message you can set `PIXI.utils._saidHello = true;`
     * so the library thinks it already said it. Keep in mind that doing that will forever
     * makes you a jerk face.
     *
     * @memberof PIXI.utils
     * @param {string} type - The string renderer type to log.
     * @constant
     * @static
     */
    sayHello: function sayHello(type) {
        if (utils._saidHello) {
            return;
        }

        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
            var args = ['\n %c %c %c Pixi.js ' + _const.CONST.VERSION + ' - ✰ ' + type + ' ✰  %c ' + ' %c ' + ' http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n', 'background: #ff66a5; padding:5px 0;', 'background: #ff66a5; padding:5px 0;', 'color: #ff66a5; background: #030307; padding:5px 0;', 'background: #ff66a5; padding:5px 0;', 'background: #ffc3dc; padding:5px 0;', 'background: #ff66a5; padding:5px 0;', 'color: #ff2424; background: #fff; padding:5px 0;', 'color: #ff2424; background: #fff; padding:5px 0;', 'color: #ff2424; background: #fff; padding:5px 0;'];

            window.console.log.apply(console, args); //jshint ignore:line
        } else if (window.console) {
            window.console.log('Pixi.js ' + _const.CONST.VERSION + ' - ' + type + ' - http://www.pixijs.com/'); //jshint ignore:line
        }

        utils._saidHello = true;
    },

    /**
     * Helper for checking for webgl support
     *
     * @memberof PIXI.utils
     * @return {boolean} is webgl supported
     */
    isWebGLSupported: function isWebGLSupported() {
        var contextOptions = { stencil: true, failIfMajorPerformanceCaveat: true };
        try {
            if (!window.WebGLRenderingContext) {
                return false;
            }

            var canvas = document.createElement('canvas'),
                gl = canvas.getContext('webgl', contextOptions) || canvas.getContext('experimental-webgl', contextOptions);

            var success = !!(gl && gl.getContextAttributes().stencil);
            if (gl) {
                var loseContext = gl.getExtension('WEBGL_lose_context');

                if (loseContext) {
                    loseContext.loseContext();
                }
            }
            gl = null;

            return success;
        } catch (e) {
            return false;
        }
    },

    /**
     * Returns sign of number
     *
     * @memberof PIXI.utils
     * @param n {number}
     * @returns {number} 0 if n is 0, -1 if n is negative, 1 if n i positive
     */
    sign: function sign(n) {
        return n ? n < 0 ? -1 : 1 : 0;
    },

    /**
     * Remove a range of items from an array
     *
     * @memberof PIXI.utils
     * @param {Array<*>} arr The target array
     * @param {number} startIdx The index to begin removing from (inclusive)
     * @param {number} removeCount How many items to remove
     */
    removeItems: function removeItems(arr, startIdx, removeCount) {
        var length = arr.length;

        if (startIdx >= length || removeCount === 0) {
            return;
        }

        removeCount = startIdx + removeCount > length ? length - startIdx : removeCount;
        for (var i = startIdx, len = length - removeCount; i < len; ++i) {
            arr[i] = arr[i + removeCount];
        }

        arr.length = len;
    },

    /**
     * @todo Describe property usage
     *
     * @memberof PIXI.utils
     * @private
     */
    TextureCache: {},

    /**
     * @todo Describe property usage
     *
     * @memberof PIXI.utils
     * @private
     */
    BaseTextureCache: {}
};
exports.utils = mod_utils = utils;
exports.utils = mod_utils;