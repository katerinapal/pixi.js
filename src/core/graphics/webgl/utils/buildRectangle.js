"use strict";

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.buildRectangle = undefined;

var _buildLine = require("./buildLine");

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
                var color = utils.hex2rgb(graphicsData.fillColor);
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

var exported_buildRectangle = buildRectangle;
exports.buildRectangle = exported_buildRectangle;
