'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.determineCrossOrigin = undefined;

var _url2 = require('url');

var _url3 = _interopRequireDefault(_url2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tempAnchor;
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
    url = _url3.default.parse(tempAnchor.href);

    var samePort = !url.port && loc.port === '' || url.port === loc.port;

    // if cross origin
    if (url.hostname !== loc.hostname || !samePort || url.protocol !== loc.protocol) {
        return 'anonymous';
    }

    return '';
};

var exported_determineCrossOrigin = determineCrossOrigin;
exports.determineCrossOrigin = exported_determineCrossOrigin;
