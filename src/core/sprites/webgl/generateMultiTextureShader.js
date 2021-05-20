"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateMultiTextureShader = undefined;

var _Shader = require("../../Shader");

var _glslify = require("glslify");

var _glslify2 = _interopRequireDefault(_glslify);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var mod_generateMultiTextureShader = generateMultiTextureShader;

"use strict";

var fragTemplate = ['varying vec2 vTextureCoord;', 'varying vec4 vColor;', 'varying float vTextureId;', 'uniform sampler2D uSamplers[%count%];', 'void main(void){', 'vec4 color;', 'float textureId = floor(vTextureId+0.5);', '%forloop%', 'gl_FragColor = color * vColor;', '}'].join('\n');

function generateMultiTextureShader(gl, maxTextures) {
    var vertexSrc = (0, _glslify2.default)('./texture.vert');
    var fragmentSrc = fragTemplate;

    fragmentSrc = fragmentSrc.replace(/%count%/gi, maxTextures);
    fragmentSrc = fragmentSrc.replace(/%forloop%/gi, generateSampleSrc(maxTextures));

    var shader = new _Shader.Shader(gl, vertexSrc, fragmentSrc);

    var sampleValues = [];
    for (var i = 0; i < maxTextures; i++) {
        sampleValues[i] = i;
    }

    shader.bind();
    shader.uniforms.uSamplers = sampleValues;

    return shader;
}

function generateSampleSrc(maxTextures) {
    var src = '';

    src += '\n';
    src += '\n';

    for (var i = 0; i < maxTextures; i++) {
        if (i > 0) {
            src += '\nelse ';
        }

        if (i < maxTextures - 1) {
            src += 'if(textureId == ' + i + '.0)';
        }

        src += '\n{';
        src += '\n\tcolor = texture2D(uSamplers[' + i + '], vTextureCoord);';
        src += '\n}';
    }

    src += '\n';
    src += '\n';

    return src;
}

exports.generateMultiTextureShader = mod_generateMultiTextureShader;