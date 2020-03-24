'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});


function validateContext(gl) {
	var attributes = gl.getContextAttributes();

	// this is going to be fairly simple for now.. but at least we have rom to grow!
	if (!attributes.stencil) {
		console.warn('Provided WebGL context does not have a stencil buffer, masks may not render correctly'); // jshint ignore:line
	}
}

var exported_validateContext = validateContext;
exports.validateContext = exported_validateContext;
