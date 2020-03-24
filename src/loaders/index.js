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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var indexjs_indexjs = {
    Loader: _loader.loaderjs,

    // parsers
    bitmapFontParser: _bitmapFontParser.bitmapFontParserjs,
    spritesheetParser: _spritesheetParser.spritesheetParserjs,
    textureParser: _textureParser.textureParserjs,
    Resource: _resourceLoader2.default.Resource
};

exports.indexjs = indexjs_indexjs;
