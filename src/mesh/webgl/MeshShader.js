var mod_MeshShader = MeshShader;
import { Shader as Shader_Shader } from "../../core/Shader";
"use strict";

/**
 * @class
 * @extends PIXI.Shader
 * @memberof PIXI.mesh
 * @param gl {PIXI.Shader} TODO: Find a good explanation for this.
 */
function MeshShader(gl)
{
    Shader_Shader.call(this,
        gl,
        // vertex shader
        [
            'attribute vec2 aVertexPosition;',
            'attribute vec2 aTextureCoord;',

            'uniform mat3 translationMatrix;',
            'uniform mat3 projectionMatrix;',

            'varying vec2 vTextureCoord;',

            'void main(void){',
            '   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);',
            '   vTextureCoord = aTextureCoord;',
            '}'
        ].join('\n'),
        [
            'varying vec2 vTextureCoord;',
            'uniform float alpha;',
            'uniform vec3 tint;',

            'uniform sampler2D uSampler;',

            'void main(void){',
            '   gl_FragColor = texture2D(uSampler, vTextureCoord) * vec4(tint * alpha, alpha);',
           // '   gl_FragColor = vec4(1.0);',
            '}'
        ].join('\n')
    );
}

MeshShader.prototype = Object.create(Shader_Shader.prototype);
MeshShader.prototype.constructor = MeshShader;

/**
 * @class
 * @extends PIXI.Shader
 * @memberof PIXI.mesh
 * @param gl {PIXI.Shader} TODO: Find a good explanation for this.
 */
export { mod_MeshShader as MeshShader };

