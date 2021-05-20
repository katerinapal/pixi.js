"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.determineCrossOrigin = undefined;

var _url = require("url");

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

"use strict";
var tempAnchor;

/**
 * Sets the `crossOrigin` property for this resource based on if the url
 * for this resource is cross-origin. If crossOrigin was manually set, this
 * function does nothing.
 * Nipped from the resource loader!
 * @private
 * @param url {string} The url to test.
 * @param loc [location=window.location] {object} The location object to test against.
 * @return {string} The crossOrigin value to use (or empty string for none).
 */
var determineCrossOrigin = function determineCrossOrigin(url, loc) {
    // data: and javascript: urls are considered same-origin
    if (url.indexOf('data:') === 0) {
        return '';
    }

    // default is window.location
    loc = loc || window.location;

    if (!tempAnchor) {
        tempAnchor = document.createElement('a');
    }

    // let the browser determine the full href for the url of this resource and then
    // parse with the node url lib, we can't use the properties of the anchor element
    // because they don't work in IE9 :(
    tempAnchor.href = url;
    url = _url2.default.parse(tempAnchor.href);

    var samePort = !url.port && loc.port === '' || url.port === loc.port;

    // if cross origin
    if (url.hostname !== loc.hostname || !samePort || url.protocol !== loc.protocol) {
        return 'anonymous';
    }

    return '';
};

var mod_determineCrossOrigin;

exports.determineCrossOrigin = mod_determineCrossOrigin = determineCrossOrigin;
exports.determineCrossOrigin = mod_determineCrossOrigin;