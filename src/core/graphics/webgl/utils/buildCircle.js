"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buildCircle = undefined;

var _buildLine = require("./buildLine");

var _const = require("../../../const");

var _utils = require("../../../utils");

"use strict";

/**
 * Builds a circle to draw
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param graphicsData {PIXI.WebGLGraphicsData} The graphics object to draw
 * @param webGLData {object} an object containing all the webGL-specific information to create this shape
 */
var buildCircle = function buildCircle(graphicsData, webGLData) {
    // need to convert points to a nice regular data
    var circleData = graphicsData.shape;
    var x = circleData.x;
    var y = circleData.y;
    var width;
    var height;

    // TODO - bit hacky??
    if (graphicsData.type === _const.CONST.SHAPES.CIRC) {
        width = circleData.radius;
        height = circleData.radius;
    } else {
        width = circleData.width;
        height = circleData.height;
    }

    var totalSegs = Math.floor(30 * Math.sqrt(circleData.radius)) || Math.floor(15 * Math.sqrt(circleData.width + circleData.height));
    var seg = Math.PI * 2 / totalSegs;

    var i = 0;

    if (graphicsData.fill) {
        var color = _utils.utils.hex2rgb(graphicsData.fillColor);
        var alpha = graphicsData.fillAlpha;

        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;

        var verts = webGLData.points;
        var indices = webGLData.indices;

        var vecPos = verts.length / 6;

        indices.push(vecPos);

        for (i = 0; i < totalSegs + 1; i++) {
            verts.push(x, y, r, g, b, alpha);

            verts.push(x + Math.sin(seg * i) * width, y + Math.cos(seg * i) * height, r, g, b, alpha);

            indices.push(vecPos++, vecPos++);
        }

        indices.push(vecPos - 1);
    }

    if (graphicsData.lineWidth) {
        var tempPoints = graphicsData.points;

        graphicsData.points = [];

        for (i = 0; i < totalSegs + 1; i++) {
            graphicsData.points.push(x + Math.sin(seg * i) * width, y + Math.cos(seg * i) * height);
        }

        (0, _buildLine.buildLine)(graphicsData, webGLData);

        graphicsData.points = tempPoints;
    }
};

var mod_buildCircle;

exports.buildCircle = mod_buildCircle = buildCircle;
exports.buildCircle = mod_buildCircle;