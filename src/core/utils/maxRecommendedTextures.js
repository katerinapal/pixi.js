"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.maxRecommendedTextures = undefined;

var _ismobilejs = require("ismobilejs");

var _ismobilejs2 = _interopRequireDefault(_ismobilejs);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

"use strict";

var maxRecommendedTextures = function maxRecommendedTextures(max) {

	if (_ismobilejs2.default.tablet || _ismobilejs2.default.phone) {
		// check if the res is iphone 6 or higher..
		return 2;
	} else {
		// desktop should be ok
		return max;
	}
};

var mod_maxRecommendedTextures;

exports.maxRecommendedTextures = mod_maxRecommendedTextures = maxRecommendedTextures;
exports.maxRecommendedTextures = mod_maxRecommendedTextures;