import { ParticleContainer as ParticleContainer_ParticleContainer } from "./ParticleContainer";
import { ParticleRenderer as webglParticleRenderer_ParticleRenderer } from "./webgl/ParticleRenderer";
"use strict";
/**
 * @file        Main export of the PIXI extras library
 * @author      Mat Groves <mat@goodboydigital.com>
 * @copyright   2013-2015 GoodBoyDigital
 * @license     {@link https://github.com/pixijs/pixi.js/blob/master/LICENSE|MIT License}
 */

/**
 * @namespace PIXI.particles
 */
mod_indexjs = {
	ParticleContainer:           ParticleContainer_ParticleContainer,
    ParticleRenderer: 			 webglParticleRenderer_ParticleRenderer
};
var mod_indexjs;
export { mod_indexjs as indexjs };
