'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Shader = undefined;

var _pixiGlCore = require('pixi-gl-core');

var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GLShader = _pixiGlCore2.default.GLShader;

function checkPrecision(src) {
    if (src instanceof Array) {
        if (src[0].substring(0, 9) !== 'precision') {
            var copy = src.slice(0);
            copy.unshift('precision ' + Const.PRECISION.DEFAULT + ' float;');
            return copy;
        }
    } else {
        if (src.substring(0, 9) !== 'precision') {
            return 'precision ' + Const.PRECISION.DEFAULT + ' float;\n' + src;
        }
    }
    return src;
}

var Shader = function Shader(gl, vertexSrc, fragmentSrc) {
    GLShader.call(this, gl, checkPrecision(vertexSrc), checkPrecision(fragmentSrc));
};

var exported_Shader = Shader;

Shader.prototype = Object.create(GLShader.prototype);
Shader.prototype.constructor = Shader;
exports.Shader = exported_Shader;
