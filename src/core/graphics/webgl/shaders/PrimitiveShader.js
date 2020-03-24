'use strict';

Object.defineProperty(exports, "__esModule", {
            value: true
});
exports.PrimitiveShader = undefined;

var _Shader = require('../../../Shader');

function PrimitiveShader(gl) {
            _Shader.Shader.call(this, gl,
            // vertex shader
            ['attribute vec2 aVertexPosition;', 'attribute vec4 aColor;', 'uniform mat3 translationMatrix;', 'uniform mat3 projectionMatrix;', 'uniform float alpha;', 'uniform vec3 tint;', 'varying vec4 vColor;', 'void main(void){', '   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);', '   vColor = aColor * vec4(tint * alpha, alpha);', '}'].join('\n'),
            // fragment shader
            ['varying vec4 vColor;', 'void main(void){', '   gl_FragColor = vColor;', '}'].join('\n'));
}

PrimitiveShader.prototype = Object.create(_Shader.Shader.prototype);
PrimitiveShader.prototype.constructor = PrimitiveShader;

var exported_PrimitiveShader = PrimitiveShader;

/**
 * This shader is used to draw simple primitive shapes for {@link PIXI.Graphics}.
 *
 * @class
 * @memberof PIXI
 * @extends PIXI.Shader
 * @param gl {WebGLRenderingContext} The webgl shader manager this shader works for.
 */
exports.PrimitiveShader = exported_PrimitiveShader;
