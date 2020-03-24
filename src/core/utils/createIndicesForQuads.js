"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var createIndicesForQuads = function createIndicesForQuads(size) {
    // the total number of indices in our array, there are 6 points per quad.

    var totalIndices = size * 6;

    var indices = new Uint16Array(totalIndices);

    // fill the indices with the quads to draw
    for (var i = 0, j = 0; i < totalIndices; i += 6, j += 4) {
        indices[i + 0] = j + 0;
        indices[i + 1] = j + 1;
        indices[i + 2] = j + 2;
        indices[i + 3] = j + 0;
        indices[i + 4] = j + 2;
        indices[i + 5] = j + 3;
    }

    return indices;
};

var exported_createIndicesForQuads = createIndicesForQuads;
exports.createIndicesForQuads = exported_createIndicesForQuads;
