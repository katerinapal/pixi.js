import { Shader as coreShader_Shaderjs } from "../../core/Shader";
import glslify from "glslify";
function TilingShader(gl) {
    coreShader_Shaderjs.call(this,
        gl,
        glslify('./tilingSprite.vert'),
        glslify('./tilingSprite.frag')
    );
}

TilingShader.prototype = Object.create(coreShader_Shaderjs.prototype);
TilingShader.prototype.constructor = TilingShader;
var exported_TilingShader = TilingShader;

/**
 * @class
 * @extends PIXI.Shader
 * @memberof PIXI.mesh
 * @param gl {PIXI.Shader} The WebGL shader manager this shader works for.
 */
export { exported_TilingShader as TilingShader };

