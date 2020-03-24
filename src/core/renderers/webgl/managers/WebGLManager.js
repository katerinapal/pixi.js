'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function WebGLManager(renderer) {
  /**
   * The renderer this manager works for.
   *
   * @member {PIXI.WebGLRenderer}
   */
  this.renderer = renderer;

  this.renderer.on('context', this.onContextChange, this);
}

WebGLManager.prototype.constructor = WebGLManager;

/**
 * Generic method called when there is a WebGL context change.
 *
 */
WebGLManager.prototype.onContextChange = function () {
  // do some codes init!
};

/**
 * Generic destroy methods to be overridden by the subclass
 *
 */
WebGLManager.prototype.destroy = function () {
  this.renderer.off('context', this.onContextChange, this);

  this.renderer = null;
};
var exported_WebGLManager = WebGLManager;

/**
 * @class
 * @memberof PIXI
 * @param renderer {PIXI.WebGLRenderer} The renderer this manager works for.
 */
exports.WebGLManager = exported_WebGLManager;
