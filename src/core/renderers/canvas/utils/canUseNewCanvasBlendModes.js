'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


/**
 * Creates a little colored canvas
 * @return {canvas} a small canvas element
 */
var createColoredCanvas = function createColoredCanvas(color) {
    var canvas = document.createElement('canvas');
    canvas.width = 6;
    canvas.height = 1;

    var context = canvas.getContext('2d');
    context.fillStyle = color;
    context.fillRect(0, 0, 6, 1);
    return canvas;
};

var canUseNewCanvasBlendModes = function canUseNewCanvasBlendModes() {
    if (typeof document === 'undefined') {
        return false;
    }

    var magenta = createColoredCanvas('#ff00ff');
    var yellow = createColoredCanvas('#ffff00');

    var canvas = document.createElement('canvas');
    canvas.width = 6;
    canvas.height = 1;

    var context = canvas.getContext('2d');
    context.globalCompositeOperation = 'multiply';
    context.drawImage(magenta, 0, 0);
    context.drawImage(yellow, 2, 0);

    var imageData = context.getImageData(2, 0, 1, 1);

    if (!imageData) {
        return false;
    }

    var data = imageData.data;

    return data[0] === 255 && data[1] === 0 && data[2] === 0;
};

var exported_canUseNewCanvasBlendModes = canUseNewCanvasBlendModes;
exports.canUseNewCanvasBlendModes = exported_canUseNewCanvasBlendModes;
