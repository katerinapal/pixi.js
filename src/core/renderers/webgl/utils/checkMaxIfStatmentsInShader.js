'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkMaxIfStatmentsInShader = undefined;

var _pixiGlCore = require('pixi-gl-core');

var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragTemplate = ['precision mediump float;', 'void main(void){', 'float test = 0.1;', '%forloop%', 'gl_FragColor = vec4(0.0);', '}'].join('\n');

var checkMaxIfStatmentsInShader = function checkMaxIfStatmentsInShader(maxIfs, gl) {
    var createTempContext = !gl;

    if (createTempContext) {
        var tinyCanvas = document.createElement('canvas');
        tinyCanvas.width = 1;
        tinyCanvas.height = 1;

        gl = _pixiGlCore2.default.createContext(tinyCanvas);
    }

    var shader = gl.createShader(gl.FRAGMENT_SHADER);

    while (true) {
        var fragmentSrc = fragTemplate.replace(/%forloop%/gi, generateIfTestSrc(maxIfs));

        gl.shaderSource(shader, fragmentSrc);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            maxIfs = maxIfs / 2 | 0;
        } else {
            // valid!
            break;
        }
    }

    if (createTempContext) {
        // get rid of context
        if (gl.getExtension('WEBGL_lose_context')) {
            gl.getExtension('WEBGL_lose_context').loseContext();
        }
    }

    return maxIfs;
};

var exported_checkMaxIfStatmentsInShader = checkMaxIfStatmentsInShader;

function generateIfTestSrc(maxIfs) {
    var src = '';

    for (var i = 0; i < maxIfs; i++) {
        if (i > 0) {
            src += '\nelse ';
        }

        if (i < maxIfs - 1) {
            src += 'if(test == ' + i + '.0){}';
        }
    }

    return src;
}

exports.checkMaxIfStatmentsInShader = exported_checkMaxIfStatmentsInShader;
