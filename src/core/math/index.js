import { Pointjs as Point_Pointjs } from "./Point";
import { ObservablePointjs as ObservablePoint_ObservablePointjs } from "./ObservablePoint";
import { Matrixjs as Matrix_Matrixjs } from "./Matrix";
import * as GroupD8_GroupD8js from "./GroupD8";
import { Circlejs as shapesCircle_Circlejs } from "./shapes/Circle";
import { Ellipsejs as shapesEllipse_Ellipsejs } from "./shapes/Ellipse";
import { Polygonjs as shapesPolygon_Polygonjs } from "./shapes/Polygon";
import { Rectanglejs as shapesRectangle_Rectanglejs } from "./shapes/Rectangle";
import { RoundedRectanglejs as shapesRoundedRectangle_RoundedRectanglejs } from "./shapes/RoundedRectangle";

var indexjs_indexjs = {
    // These will be mixed to be made publicly available,
    // while this module is used internally in core
    // to avoid circular dependencies and cut down on
    // internal module requires.

    Point:              Point_Pointjs,
    ObservablePoint:    ObservablePoint_ObservablePointjs,
    Matrix:             Matrix_Matrixjs,
    GroupD8:            GroupD8_GroupD8js,

    Circle:             shapesCircle_Circlejs,
    Ellipse:            shapesEllipse_Ellipsejs,
    Polygon:            shapesPolygon_Polygonjs,
    Rectangle:          shapesRectangle_Rectanglejs,
    RoundedRectangle:   shapesRoundedRectangle_RoundedRectanglejs
};

export { indexjs_indexjs as indexjs };
