"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.indexjs = undefined;

var _WebGLPrepare = require("./webgl/WebGLPrepare");

var _CanvasPrepare = require("./canvas/CanvasPrepare");

var indexjs_indexjs = {
    webGL: _WebGLPrepare.WebGLPreparejs,
    canvas: _CanvasPrepare.CanvasPreparejs
};

exports.indexjs = indexjs_indexjs;
