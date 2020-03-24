import pixiglcore_pixiglcore from "pixi-gl-core";
var GLShader = pixiglcore_pixiglcore.GLShader;

function checkPrecision(src) {
    if (src instanceof Array) {
        if (src[0].substring(0,9) !== 'precision') {
            var copy = src.slice(0);
            copy.unshift('precision ' + Const.PRECISION.DEFAULT + ' float;');
            return copy;
        }
    } else {
        if (src.substring(0,9) !== 'precision') {
            return 'precision ' + Const.PRECISION.DEFAULT + ' float;\n' + src;
        }
    }
    return src;
}

var Shader = function(gl, vertexSrc, fragmentSrc) {
    GLShader.call(this, gl, checkPrecision(vertexSrc), checkPrecision(fragmentSrc));
};

let exported_Shader = Shader;

Shader.prototype = Object.create(GLShader.prototype);
Shader.prototype.constructor = Shader;
export { exported_Shader as Shader };
