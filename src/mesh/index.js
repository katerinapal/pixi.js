import { Meshjs as Mesh_Meshjs } from "./Mesh";
import { Planejs as Plane_Planejs } from "./Plane";
import { NineSlicePlanejs as NineSlicePlane_NineSlicePlanejs } from "./NineSlicePlane";
import { Ropejs as Rope_Ropejs } from "./Rope";
import { MeshShaderjs as webglMeshShader_MeshShaderjs } from "./webgl/MeshShader";

var indexjs_indexjs = {
    Mesh:           Mesh_Meshjs,
    Plane:           Plane_Planejs,
    NineSlicePlane: NineSlicePlane_NineSlicePlanejs,
    Rope:           Rope_Ropejs,
    MeshShader:     webglMeshShader_MeshShaderjs
};

export { indexjs_indexjs as indexjs };
