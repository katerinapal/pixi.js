import { loaderjs as loader_loaderjs } from "./loader";
import { bitmapFontParserjs as bitmapFontParser_bitmapFontParserjs } from "./bitmapFontParser";
import { spritesheetParserjs as spritesheetParser_spritesheetParserjs } from "./spritesheetParser";
import { textureParserjs as textureParser_textureParserjs } from "./textureParser";
import resourceloader from "resource-loader";

var indexjs_indexjs = {
    Loader:             loader_loaderjs,

    // parsers
    bitmapFontParser:   bitmapFontParser_bitmapFontParserjs,
    spritesheetParser:  spritesheetParser_spritesheetParserjs,
    textureParser:      textureParser_textureParserjs,
    Resource:           resourceloader.Resource
};

export { indexjs_indexjs as indexjs };
