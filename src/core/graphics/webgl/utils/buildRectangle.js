"use strict";

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.buildRectangle = undefined;

var _buildLine = require("./buildLine");

var _utils = require("../../../utils");

"use strict";

/**
 * Builds a rectangle to draw
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param graphicsData {PIXI.WebGLGraphicsData} The graphics object containing all the necessary properties
 * @param webGLData {object} an object containing all the webGL-specific information to create this shape
 */
var buildRectangle = function buildRectangle(graphicsData, webGLData) {
        // --- //
        // need to convert points to a nice regular data
        //
        var rectData = graphicsData.shape;
        var x = rectData.x;
        var y = rectData.y;
        var width = rectData.width;
        var height = rectData.height;

        if (graphicsData.fill) {
                var color = _utils.utils.hex2rgb(graphicsData.fillColor);
                var alpha = graphicsData.fillAlpha;

                var r = color[0] * alpha;
                var g = color[1] * alpha;
                var b = color[2] * alpha;

                var verts = webGLData.points;
                var indices = webGLData.indices;

                var vertPos = verts.length / 6;

                // start
                verts.push(x, y);
                verts.push(r, g, b, alpha);

                verts.push(x + width, y);
                verts.push(r, g, b, alpha);

                verts.push(x, y + height);
                verts.push(r, g, b, alpha);

                verts.push(x + width, y + height);
                verts.push(r, g, b, alpha);

                // insert 2 dead triangles..
                indices.push(vertPos, vertPos, vertPos + 1, vertPos + 2, vertPos + 3, vertPos + 3);
        }

        if (graphicsData.lineWidth) {
                var tempPoints = graphicsData.points;

                graphicsData.points = [x, y, x + width, y, x + width, y + height, x, y + height, x, y];

                (0, _buildLine.buildLine)(graphicsData, webGLData);

                graphicsData.points = tempPoints;
        }
};

var mod_buildRectangle;

exports.buildRectangle = mod_buildRectangle = buildRectangle;
exports.buildRectangle = mod_buildRectangle;