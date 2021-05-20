import { core as core_core } from "./core";
import { indexjs as extras_indexjs } from "./extras";
import { indexjs as filters_indexjs } from "./filters";
import { indexjs as interaction_indexjs } from "./interaction";
import { indexjs as loaders_indexjs } from "./loaders";
import { indexjs as mesh_indexjs } from "./mesh";
import { indexjs as particles_indexjs } from "./particles";
import { indexjs as accessibility_indexjs } from "./accessibility";
import { indexjs as extract_indexjs } from "./extract";
import { indexjs as prepare_indexjs } from "./prepare";
import "./polyfill";
export var globalPIXI;
"use strict";
var mod_core;

var core = core_core;

// add core plugins.
core_core.extras         = extras_indexjs;
core_core.filters        = filters_indexjs;
core_core.interaction    = interaction_indexjs;
core_core.loaders        = loaders_indexjs;
core_core.mesh           = mesh_indexjs;
core_core.particles      = particles_indexjs;
core_core.accessibility  = accessibility_indexjs;
core_core.extract        = extract_indexjs;
core_core.prepare        = prepare_indexjs;

// export a premade loader instance
/**
 * A premade instance of the loader that can be used to loader resources.
 *
 * @name loader
 * @memberof PIXI
 * @property {PIXI.loaders.Loader}
 */
core_core.loader = new core_core.loaders.Loader();

// mixin the deprecation features.
Object.assign(core_core, require('./deprecation'));

// Always export pixi globally.
globalPIXI = core_core;
mod_core = core;
export { mod_core as core };

export function setGlobalPIXI(value) {
 globalPIXI = value;
}
