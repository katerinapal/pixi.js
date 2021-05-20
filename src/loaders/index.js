"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.indexjs = undefined;

var _loader = require("./loader");

var _bitmapFontParser = require("./bitmapFontParser");

var _spritesheetParser = require("./spritesheetParser");

var _textureParser = require("./textureParser");

var _resourceLoader = require("resource-loader");

var _resourceLoader2 = _interopRequireDefault(_resourceLoader);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

"use strict";
/**
 * @file        Main export of the PIXI loaders library
 * @author      Mat Groves <mat@goodboydigital.com>
 * @copyright   2013-2015 GoodBoyDigital
 * @license     {@link https://github.com/pixijs/pixi.js/blob/master/LICENSE|MIT License}
 */

/**
 * @namespace PIXI.loaders
 */
exports.indexjs = mod_indexjs = {
  Loader: _loader.Loader,

  // parsers
  bitmapFontParser: _bitmapFontParser.bitmapFontParser,
  spritesheetParser: _spritesheetParser.spritesheetParser,
  textureParser: _textureParser.textureParser,
  Resource: _resourceLoader2.default.Resource
};
var mod_indexjs;
exports.indexjs = mod_indexjs;