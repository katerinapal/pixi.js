"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebGLGraphicsData = undefined;

var _pixiGlCore = require("pixi-gl-core");

var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var mod_WebGLGraphicsData = WebGLGraphicsData;

"use strict";

/**
 * An object containing WebGL specific properties to be used by the WebGL renderer
 *
 * @class
 * @private
 * @memberof PIXI
 * @param gl {WebGLRenderingContext} The current WebGL drawing context
 * @param shader {PIXI.Shader} The shader
 * @param attribsState {object} The state for the VAO
 */
function WebGLGraphicsData(gl, shader, attribsState) {

  /**
   * The current WebGL drawing context
   *
   * @member {WebGLRenderingContext}
   */
  this.gl = gl;

  //TODO does this need to be split before uploding??
  /**
   * An array of color components (r,g,b)
   * @member {number[]}
   */
  this.color = [0, 0, 0]; // color split!

  /**
   * An array of points to draw
   * @member {PIXI.Point[]}
   */
  this.points = [];

  /**
   * The indices of the vertices
   * @member {number[]}
   */
  this.indices = [];
  /**
   * The main buffer
   * @member {WebGLBuffer}
   */
  this.buffer = _pixiGlCore2.default.GLBuffer.createVertexBuffer(gl);

  /**
   * The index buffer
   * @member {WebGLBuffer}
   */
  this.indexBuffer = _pixiGlCore2.default.GLBuffer.createIndexBuffer(gl);

  /**
   * Whether this graphics is dirty or not
   * @member {boolean}
   */
  this.dirty = true;

  this.glPoints = null;
  this.glIndices = null;

  /**
   *
   * @member {PIXI.Shader}
   */
  this.shader = shader;

  this.vao = new _pixiGlCore2.default.VertexArrayObject(gl, attribsState).addIndex(this.indexBuffer).addAttribute(this.buffer, shader.attributes.aVertexPosition, gl.FLOAT, false, 4 * 6, 0).addAttribute(this.buffer, shader.attributes.aColor, gl.FLOAT, false, 4 * 6, 2 * 4);
}

WebGLGraphicsData.prototype.constructor = WebGLGraphicsData;

/**
 * Resets the vertices and the indices
 */
WebGLGraphicsData.prototype.reset = function () {
  this.points.length = 0;
  this.indices.length = 0;
};

/**
 * Binds the buffers and uploads the data
 */
WebGLGraphicsData.prototype.upload = function () {
  this.glPoints = new Float32Array(this.points);
  this.buffer.upload(this.glPoints);

  this.glIndices = new Uint16Array(this.indices);
  this.indexBuffer.upload(this.glIndices);

  this.dirty = false;
};

/**
 * Empties all the data
 */
WebGLGraphicsData.prototype.destroy = function () {
  this.color = null;
  this.points = null;
  this.indices = null;

  this.vao.destroy();
  this.buffer.destroy();
  this.indexBuffer.destroy();

  this.gl = null;

  this.buffer = null;
  this.indexBuffer = null;

  this.glPoints = null;
  this.glIndices = null;
};

/**
 * An object containing WebGL specific properties to be used by the WebGL renderer
 *
 * @class
 * @private
 * @memberof PIXI
 * @param gl {WebGLRenderingContext} The current WebGL drawing context
 * @param shader {PIXI.Shader} The shader
 * @param attribsState {object} The state for the VAO
 */
exports.WebGLGraphicsData = mod_WebGLGraphicsData;