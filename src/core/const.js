
import { CONST as utilsmaxRecommendedTextures_CONST } from "./utils/maxRecommendedTextures";
var const_VERSION = "__VERSION__";
var const_PI_2 = Math.PI * 2;
var const_RAD_TO_DEG = 180 / Math.PI;
var const_DEG_TO_RAD = Math.PI / 180;
var const_TARGET_FPMS = 0.06;

var const_RENDERER_TYPE = {
 UNKNOWN: 0,
 WEBGL: 1,
 CANVAS: 2
};

var const_BLEND_MODES = {
 NORMAL: 0,
 ADD: 1,
 MULTIPLY: 2,
 SCREEN: 3,
 OVERLAY: 4,
 DARKEN: 5,
 LIGHTEN: 6,
 COLOR_DODGE: 7,
 COLOR_BURN: 8,
 HARD_LIGHT: 9,
 SOFT_LIGHT: 10,
 DIFFERENCE: 11,
 EXCLUSION: 12,
 HUE: 13,
 SATURATION: 14,
 COLOR: 15,
 LUMINOSITY: 16
};

var const_DRAW_MODES = {
 POINTS: 0,
 LINES: 1,
 LINE_LOOP: 2,
 LINE_STRIP: 3,
 TRIANGLES: 4,
 TRIANGLE_STRIP: 5,
 TRIANGLE_FAN: 6
};

var const_SCALE_MODES = {
 DEFAULT: 0,
 LINEAR: 0,
 NEAREST: 1
};

var const_WRAP_MODES = {
 DEFAULT: 0,
 CLAMP: 0,
 REPEAT: 1,
 MIRRORED_REPEAT: 2
};

var const_GC_MODES = {
 DEFAULT: 0,
 AUTO: 0,
 MANUAL: 1
};

var const_MIPMAP_TEXTURES = true;
var const_RETINA_PREFIX = /@(.+)x/;
var const_RESOLUTION = 1;
var const_FILTER_RESOLUTION = 1;

var const_DEFAULT_RENDER_OPTIONS = {
 view: null,
 resolution: 1,
 antialias: false,
 forceFXAA: false,
 autoResize: false,
 transparent: false,
 backgroundColor: 0x000000,
 clearBeforeRender: true,
 preserveDrawingBuffer: false,
 roundPixels: false
};

var const_SHAPES = {
 POLY: 0,
 RECT: 1,
 CIRC: 2,
 ELIP: 3,
 RREC: 4
};

var const_PRECISION = {
 DEFAULT: "mediump",
 LOW: "lowp",
 MEDIUM: "mediump",
 HIGH: "highp"
};

var const_TRANSFORM_MODE = {
 DEFAULT: 0,
 STATIC: 0,
 DYNAMIC: 1
};

var const_TEXT_GRADIENT = {
 LINEAR_VERTICAL: 0,
 LINEAR_HORIZONTAL: 1
};

var const_SPRITE_BATCH_SIZE = 4096;
var const_SPRITE_MAX_TEXTURES = utilsmaxRecommendedTextures_CONST(32);
export { const_VERSION as VERSION, const_TARGET_FPMS as TARGET_FPMS, const_RENDERER_TYPE as RENDERER_TYPE, const_BLEND_MODES as BLEND_MODES, const_DRAW_MODES as DRAW_MODES, const_SCALE_MODES as SCALE_MODES, const_WRAP_MODES as WRAP_MODES, const_GC_MODES as GC_MODES, const_MIPMAP_TEXTURES as MIPMAP_TEXTURES, const_RETINA_PREFIX as RETINA_PREFIX, const_RESOLUTION as RESOLUTION, const_DEFAULT_RENDER_OPTIONS as DEFAULT_RENDER_OPTIONS, const_SHAPES as SHAPES, const_PRECISION as PRECISION, const_TRANSFORM_MODE as TRANSFORM_MODE, const_TEXT_GRADIENT as TEXT_GRADIENT, const_SPRITE_BATCH_SIZE as SPRITE_BATCH_SIZE, const_SPRITE_MAX_TEXTURES as SPRITE_MAX_TEXTURES };
