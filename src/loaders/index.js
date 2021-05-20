import { Loader as loader_Loader } from "./loader";
import { bitmapFontParser as bitmapFontParser_bitmapFontParser } from "./bitmapFontParser";
import { spritesheetParser as spritesheetParser_spritesheetParser } from "./spritesheetParser";
import { textureParser as textureParser_textureParser } from "./textureParser";
import ext_resourceloader from "resource-loader";
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
mod_indexjs = {
    Loader:             loader_Loader,

    // parsers
    bitmapFontParser:   bitmapFontParser_bitmapFontParser,
    spritesheetParser:  spritesheetParser_spritesheetParser,
    textureParser:      textureParser_textureParser,
    Resource:           ext_resourceloader.Resource
};
var mod_indexjs;
export { mod_indexjs as indexjs };
