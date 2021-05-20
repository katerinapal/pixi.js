"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buildPoly = undefined;

var _buildLine = require("./buildLine");

var _utils = require("../../../utils");

var _earcut = require("earcut");

var _earcut2 = _interopRequireDefault(_earcut);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

"use strict";

/**
 * Builds a polygon to draw
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param graphicsData {PIXI.WebGLGraphicsData} The graphics object containing all the necessary properties
 * @param webGLData {object} an object containing all the webGL-specific information to create this shape
 */
var buildPoly = function buildPoly(graphicsData, webGLData) {
    graphicsData.points = graphicsData.shape.points.slice();

    var points = graphicsData.points;

    if (graphicsData.fill && points.length >= 6) {
        var holeArray = [];
        // Process holes..
        var holes = graphicsData.holes;

        for (var i = 0; i < holes.length; i++) {
            var hole = holes[i];

            holeArray.push(points.length / 2);

            points = points.concat(hole.points);
        }

        // get first and last point.. figure out the middle!
        var verts = webGLData.points;
        var indices = webGLData.indices;

        var length = points.length / 2;

        // sort color
        var color = _utils.utils.hex2rgb(graphicsData.fillColor);
        var alpha = graphicsData.fillAlpha;
        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;

        var triangles = (0, _earcut2.default)(points, holeArray, 2);

        if (!triangles) {
            return;
        }

        var vertPos = verts.length / 6;

        for (i = 0; i < triangles.length; i += 3) {
            indices.push(triangles[i] + vertPos);
            indices.push(triangles[i] + vertPos);
            indices.push(triangles[i + 1] + vertPos);
            indices.push(triangles[i + 2] + vertPos);
            indices.push(triangles[i + 2] + vertPos);
        }

        for (i = 0; i < length; i++) {
            verts.push(points[i * 2], points[i * 2 + 1], r, g, b, alpha);
        }
    }

    if (graphicsData.lineWidth > 0) {
        (0, _buildLine.buildLine)(graphicsData, webGLData);
    }
};

var mod_buildPoly;

exports.buildPoly = mod_buildPoly = buildPoly;
exports.buildPoly = mod_buildPoly;