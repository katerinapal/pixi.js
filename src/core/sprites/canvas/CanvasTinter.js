"use strict";

var _canUseNewCanvasBlendModes = require("../../renderers/canvas/utils/canUseNewCanvasBlendModes");

var CanvasTinter_canvas = null;
var CanvasTinter_tintMethod = CanvasTinter.canUseMultiply ? CanvasTinter.tintWithMultiply : CanvasTinter.tintWithPerPixel;
