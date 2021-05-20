

"use strict";

var getMaxKernelSize = function(gl)
{
    var maxVaryings = ( gl.getParameter(gl.MAX_VARYING_VECTORS) );
    var kernelSize = 15;

    while(kernelSize > maxVaryings)
    {
       kernelSize -= 2;
    }

    return kernelSize;
};

var mod_getMaxKernelSize;

mod_getMaxKernelSize = getMaxKernelSize;
export { mod_getMaxKernelSize as getMaxKernelSize };
