import { Mesh as Mesh_Mesh } from "./Mesh";
import { Plane as Plane_Plane } from "./Plane";
import { NineSlicePlane as NineSlicePlane_NineSlicePlane } from "./NineSlicePlane";
import { Rope as Rope_Rope } from "./Rope";
import { MeshShader as webglMeshShader_MeshShader } from "./webgl/MeshShader";
"use strict";
/**
 * @file        Main export of the PIXI extras library
 * @author      Mat Groves <mat@goodboydigital.com>
 * @copyright   2013-2015 GoodBoyDigital
 * @license     {@link https://github.com/pixijs/pixi.js/blob/master/LICENSE|MIT License}
 */

/**
 * @namespace PIXI.mesh
 */
mod_indexjs = {
    Mesh:           Mesh_Mesh,
    Plane:           Plane_Plane,
    NineSlicePlane: NineSlicePlane_NineSlicePlane,
    Rope:           Rope_Rope,
    MeshShader:     webglMeshShader_MeshShader
};
var mod_indexjs;
export { mod_indexjs as indexjs };
