"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


var getMaxKernelSize = function getMaxKernelSize(gl) {
    var maxVaryings = gl.getParameter(gl.MAX_VARYING_VECTORS);
    var kernelSize = 15;

    while (kernelSize > maxVaryings) {
        kernelSize -= 2;
    }

    return kernelSize;
};

var exported_getMaxKernelSize = getMaxKernelSize;
exports.getMaxKernelSize = exported_getMaxKernelSize;
