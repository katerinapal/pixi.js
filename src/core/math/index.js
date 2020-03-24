"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.indexjs = undefined;

var _Point = require("./Point");

var _ObservablePoint = require("./ObservablePoint");

var _Matrix = require("./Matrix");

var _GroupD = require("./GroupD8");

var GroupD8_GroupD8js = _interopRequireWildcard(_GroupD);

var _Circle = require("./shapes/Circle");

var _Ellipse = require("./shapes/Ellipse");

var _Polygon = require("./shapes/Polygon");

var _Rectangle = require("./shapes/Rectangle");

var _RoundedRectangle = require("./shapes/RoundedRectangle");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var indexjs_indexjs = {
    // These will be mixed to be made publicly available,
    // while this module is used internally in core
    // to avoid circular dependencies and cut down on
    // internal module requires.

    Point: _Point.Pointjs,
    ObservablePoint: _ObservablePoint.ObservablePointjs,
    Matrix: _Matrix.Matrixjs,
    GroupD8: GroupD8_GroupD8js,

    Circle: _Circle.Circlejs,
    Ellipse: _Ellipse.Ellipsejs,
    Polygon: _Polygon.Polygonjs,
    Rectangle: _Rectangle.Rectanglejs,
    RoundedRectangle: _RoundedRectangle.RoundedRectanglejs
};

exports.indexjs = indexjs_indexjs;
