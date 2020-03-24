"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buildRoundedRectangle = undefined;

var _earcut = require("earcut");

var _earcut2 = _interopRequireDefault(_earcut);

var _buildLine = require("./buildLine");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildRoundedRectangle = function buildRoundedRectangle(graphicsData, webGLData) {
    var rrectData = graphicsData.shape;
    var x = rrectData.x;
    var y = rrectData.y;
    var width = rrectData.width;
    var height = rrectData.height;

    var radius = rrectData.radius;

    var recPoints = [];
    recPoints.push(x, y + radius);
    quadraticBezierCurve(x, y + height - radius, x, y + height, x + radius, y + height, recPoints);
    quadraticBezierCurve(x + width - radius, y + height, x + width, y + height, x + width, y + height - radius, recPoints);
    quadraticBezierCurve(x + width, y + radius, x + width, y, x + width - radius, y, recPoints);
    quadraticBezierCurve(x + radius, y, x, y, x, y + radius + 0.0000000001, recPoints);

    // this tiny number deals with the issue that occurs when points overlap and earcut fails to triangulate the item.
    // TODO - fix this properly, this is not very elegant.. but it works for now.

    if (graphicsData.fill) {
        var color = utils.hex2rgb(graphicsData.fillColor);
        var alpha = graphicsData.fillAlpha;

        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;

        var verts = webGLData.points;
        var indices = webGLData.indices;

        var vecPos = verts.length / 6;

        var triangles = (0, _earcut2.default)(recPoints, null, 2);

        var i = 0;
        for (i = 0; i < triangles.length; i += 3) {
            indices.push(triangles[i] + vecPos);
            indices.push(triangles[i] + vecPos);
            indices.push(triangles[i + 1] + vecPos);
            indices.push(triangles[i + 2] + vecPos);
            indices.push(triangles[i + 2] + vecPos);
        }

        for (i = 0; i < recPoints.length; i++) {
            verts.push(recPoints[i], recPoints[++i], r, g, b, alpha);
        }
    }

    if (graphicsData.lineWidth) {
        var tempPoints = graphicsData.points;

        graphicsData.points = recPoints;

        (0, _buildLine.buildLine)(graphicsData, webGLData);

        graphicsData.points = tempPoints;
    }
};

var exported_buildRoundedRectangle = buildRoundedRectangle;

/**
 * Calculate the points for a quadratic bezier curve. (helper function..)
 * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param fromX {number} Origin point x
 * @param fromY {number} Origin point x
 * @param cpX {number} Control point x
 * @param cpY {number} Control point y
 * @param toX {number} Destination point x
 * @param toY {number} Destination point y
 * @param [out] {number[]} The output array to add points into. If not passed, a new array is created.
 * @return {number[]} an array of points
 */
var quadraticBezierCurve = function quadraticBezierCurve(fromX, fromY, cpX, cpY, toX, toY, out) // jshint ignore:line
{
    var xa,
        ya,
        xb,
        yb,
        x,
        y,
        n = 20,
        points = out || [];

    function getPt(n1, n2, perc) {
        var diff = n2 - n1;

        return n1 + diff * perc;
    }

    var j = 0;
    for (var i = 0; i <= n; i++) {
        j = i / n;

        // The Green Line
        xa = getPt(fromX, cpX, j);
        ya = getPt(fromY, cpY, j);
        xb = getPt(cpX, toX, j);
        yb = getPt(cpY, toY, j);

        // The Black Dot
        x = getPt(xa, xb, j);
        y = getPt(ya, yb, j);

        points.push(x, y);
    }

    return points;
};

exports.buildRoundedRectangle = exported_buildRoundedRectangle;
