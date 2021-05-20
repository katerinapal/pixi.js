"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeshShader = undefined;

var _Shader = require("../../core/Shader");

var mod_MeshShader = MeshShader;

"use strict";

/**
 * @class
 * @extends PIXI.Shader
 * @memberof PIXI.mesh
 * @param gl {PIXI.Shader} TODO: Find a good explanation for this.
 */
function MeshShader(gl) {
  _Shader.Shader.call(this, gl,
  // vertex shader
  ['attribute vec2 aVertexPosition;', 'attribute vec2 aTextureCoord;', 'uniform mat3 translationMatrix;', 'uniform mat3 projectionMatrix;', 'varying vec2 vTextureCoord;', 'void main(void){', '   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);', '   vTextureCoord = aTextureCoord;', '}'].join('\n'), ['varying vec2 vTextureCoord;', 'uniform float alpha;', 'uniform vec3 tint;', 'uniform sampler2D uSampler;', 'void main(void){', '   gl_FragColor = texture2D(uSampler, vTextureCoord) * vec4(tint * alpha, alpha);',
  // '   gl_FragColor = vec4(1.0);',
  '}'].join('\n'));
}

MeshShader.prototype = Object.create(_Shader.Shader.prototype);
MeshShader.prototype.constructor = MeshShader;

/**
 * @class
 * @extends PIXI.Shader
 * @memberof PIXI.mesh
 * @param gl {PIXI.Shader} TODO: Find a good explanation for this.
 */
exports.MeshShader = mod_MeshShader;