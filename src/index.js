"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.core = exports.globalPIXI = undefined;
exports.setGlobalPIXI = setGlobalPIXI;

var _core = require("./core");

var _extras = require("./extras");

var _filters = require("./filters");

var _interaction = require("./interaction");

var _loaders = require("./loaders");

var _mesh = require("./mesh");

var _particles = require("./particles");

var _accessibility = require("./accessibility");

var _extract = require("./extract");

var _prepare = require("./prepare");

require("./polyfill");

var globalPIXI = exports.globalPIXI = undefined;
var core_corejsBinding = {};

var core = _core.core;

var exported_core = core;

// add core plugins.
_core.core.extras = _extras.indexjs;
_core.core.filters = _filters.indexjs;
_core.core.interaction = _interaction.indexjs;
_core.core.loaders = _loaders.indexjs;
_core.core.mesh = _mesh.indexjs;
_core.core.particles = _particles.indexjs;
_core.core.accessibility = _accessibility.indexjs;
_core.core.extract = _extract.indexjs;
_core.core.prepare = _prepare.indexjs;

// export a premade loader instance
/**
 * A premade instance of the loader that can be used to loader resources.
 *
 * @name loader
 * @memberof PIXI
 * @property {PIXI.loaders.Loader}
 */
_core.core.loader = new _core.core.loaders.Loader();

// mixin the deprecation features.
Object.assign(_core.core, require('./deprecation'));

// Always export pixi globally.
exports.globalPIXI = globalPIXI = _core.core;
exports.core = exported_core;
function setGlobalPIXI(value) {
  exports.globalPIXI = globalPIXI = value;
}
