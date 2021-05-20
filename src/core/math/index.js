"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.indexjs = undefined;

var _Point = require("./Point");

var _ObservablePoint = require("./ObservablePoint");

var _Matrix = require("./Matrix");

var _GroupD = require("./GroupD8");

var _Circle = require("./shapes/Circle");

var _Ellipse = require("./shapes/Ellipse");

var _Polygon = require("./shapes/Polygon");

var _Rectangle = require("./shapes/Rectangle");

var _RoundedRectangle = require("./shapes/RoundedRectangle");

"use strict";
/**
 * Math classes and utilities mixed into PIXI namespace.
 *
 * @lends PIXI
 */
exports.indexjs = mod_indexjs = {
    // These will be mixed to be made publicly available,
    // while this module is used internally in core
    // to avoid circular dependencies and cut down on
    // internal module requires.

    Point: _Point.Point,
    ObservablePoint: _ObservablePoint.ObservablePoint,
    Matrix: _Matrix.Matrix,
    GroupD8: _GroupD.GroupD8,

    Circle: _Circle.Circle,
    Ellipse: _Ellipse.Ellipse,
    Polygon: _Polygon.Polygon,
    Rectangle: _Rectangle.Rectangle,
    RoundedRectangle: _RoundedRectangle.RoundedRectangle
};
var mod_indexjs;
exports.indexjs = mod_indexjs;