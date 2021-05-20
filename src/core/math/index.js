import { Point as Point_Point } from "./Point";
import { ObservablePoint as ObservablePoint_ObservablePoint } from "./ObservablePoint";
import { Matrix as Matrix_Matrix } from "./Matrix";
import { GroupD8 as GroupD8_GroupD8 } from "./GroupD8";
import { Circle as shapesCircle_Circle } from "./shapes/Circle";
import { Ellipse as shapesEllipse_Ellipse } from "./shapes/Ellipse";
import { Polygon as shapesPolygon_Polygon } from "./shapes/Polygon";
import { Rectangle as shapesRectangle_Rectangle } from "./shapes/Rectangle";
import { RoundedRectangle as shapesRoundedRectangle_RoundedRectangle } from "./shapes/RoundedRectangle";
"use strict";
/**
 * Math classes and utilities mixed into PIXI namespace.
 *
 * @lends PIXI
 */
mod_indexjs = {
    // These will be mixed to be made publicly available,
    // while this module is used internally in core
    // to avoid circular dependencies and cut down on
    // internal module requires.

    Point:              Point_Point,
    ObservablePoint:    ObservablePoint_ObservablePoint,
    Matrix:             Matrix_Matrix,
    GroupD8:            GroupD8_GroupD8,

    Circle:             shapesCircle_Circle,
    Ellipse:            shapesEllipse_Ellipse,
    Polygon:            shapesPolygon_Polygon,
    Rectangle:          shapesRectangle_Rectangle,
    RoundedRectangle:   shapesRoundedRectangle_RoundedRectangle
};
var mod_indexjs;
export { mod_indexjs as indexjs };
