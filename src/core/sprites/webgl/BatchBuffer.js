

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Buffer = function Buffer(size) {

  this.vertices = new ArrayBuffer(size);

  /**
   * View on the vertices as a Float32Array for positions
   *
   * @member {Float32Array}
   */
  this.float32View = new Float32Array(this.vertices);

  /**
   * View on the vertices as a Uint32Array for uvs
   *
   * @member {Float32Array}
   */
  this.uint32View = new Uint32Array(this.vertices);
};

var mod_Buffer;

exports.Buffer = mod_Buffer = Buffer;

Buffer.prototype.destroy = function () {
  this.vertices = null;
  this.positions = null;
  this.uvs = null;
  this.colors = null;
};
exports.Buffer = mod_Buffer;