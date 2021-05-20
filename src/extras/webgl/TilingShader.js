var mod_TilingShader = TilingShader;
import { Shader as Shader_Shader } from "../../core/Shader";
import ext_glslify_glslify from "glslify";
"use strict";

/**
 * @class
 * @extends PIXI.Shader
 * @memberof PIXI.mesh
 * @param gl {PIXI.Shader} The WebGL shader manager this shader works for.
 */
function TilingShader(gl)
{
    Shader_Shader.call(this,
        gl,
        ext_glslify_glslify('./tilingSprite.vert'),
        ext_glslify_glslify('./tilingSprite.frag')
    );
}

TilingShader.prototype = Object.create(Shader_Shader.prototype);
TilingShader.prototype.constructor = TilingShader;

/**
 * @class
 * @extends PIXI.Shader
 * @memberof PIXI.mesh
 * @param gl {PIXI.Shader} The WebGL shader manager this shader works for.
 */
export { mod_TilingShader as TilingShader };

