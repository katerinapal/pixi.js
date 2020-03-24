import { core as core_corejs } from "./core";
import { indexjs as extras_indexjsjs } from "./extras";
import { indexjs as filters_indexjsjs } from "./filters";
import { indexjs as interaction_indexjsjs } from "./interaction";
import { indexjs as loaders_indexjsjs } from "./loaders";
import { indexjs as mesh_indexjsjs } from "./mesh";
import { indexjs as particles_indexjsjs } from "./particles";
import { indexjs as accessibility_indexjsjs } from "./accessibility";
import { indexjs as extract_indexjsjs } from "./extract";
import { indexjs as prepare_indexjsjs } from "./prepare";
import "./polyfill";
export var globalPIXI;
var core_corejsBinding = {};

var core = core_corejs;

var exported_core = core;

// add core plugins.
core_corejs.extras         = extras_indexjsjs;
core_corejs.filters        = filters_indexjsjs;
core_corejs.interaction    = interaction_indexjsjs;
core_corejs.loaders        = loaders_indexjsjs;
core_corejs.mesh           = mesh_indexjsjs;
core_corejs.particles      = particles_indexjsjs;
core_corejs.accessibility  = accessibility_indexjsjs;
core_corejs.extract        = extract_indexjsjs;
core_corejs.prepare        = prepare_indexjsjs;

// export a premade loader instance
/**
 * A premade instance of the loader that can be used to loader resources.
 *
 * @name loader
 * @memberof PIXI
 * @property {PIXI.loaders.Loader}
 */
core_corejs.loader = new core_corejs.loaders.Loader();

// mixin the deprecation features.
Object.assign(core_corejs, require('./deprecation'));

// Always export pixi globally.
globalPIXI = core_corejs;
export { exported_core as core };

export function setGlobalPIXI(value) {
 globalPIXI = value;
}
