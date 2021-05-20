'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setGlobalPerformance = setGlobalPerformance;
exports.setGlobalRequestAnimationFrame = setGlobalRequestAnimationFrame;
exports.setGlobalCancelAnimationFrame = setGlobalCancelAnimationFrame;
var globalCancelAnimationFrame = exports.globalCancelAnimationFrame = undefined;
var globalRequestAnimationFrame = exports.globalRequestAnimationFrame = undefined;
var globalPerformance = exports.globalPerformance = undefined;
"use strict";
// References:
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// https://gist.github.com/1579671
// http://updates.html5rocks.com/2012/05/requestAnimationFrame-API-now-with-sub-millisecond-precision
// https://gist.github.com/timhall/4078614
// https://github.com/Financial-Times/polyfill-service/tree/master/polyfills/requestAnimationFrame

// Expected to be used with Browserfiy
// Browserify automatically detects the use of `global` and passes the
// correct reference of `global`, `self`, and finally `window`

// Date.now
if (!(Date.now && Date.prototype.getTime)) {
    Date.now = function now() {
        return new Date().getTime();
    };
}

// performance.now
if (!(global.performance && global.performance.now)) {
    var startTime = Date.now();
    if (!global.performance) {
        exports.globalPerformance = globalPerformance = {};
    }
    global.performance.now = function () {
        return Date.now() - startTime;
    };
}

// requestAnimationFrame
var lastTime = Date.now();
var vendors = ['ms', 'moz', 'webkit', 'o'];

for (var x = 0; x < vendors.length && !global.requestAnimationFrame; ++x) {
    exports.globalRequestAnimationFrame = globalRequestAnimationFrame = global[vendors[x] + 'RequestAnimationFrame'];
    exports.globalCancelAnimationFrame = globalCancelAnimationFrame = global[vendors[x] + 'CancelAnimationFrame'] || global[vendors[x] + 'CancelRequestAnimationFrame'];
}

if (!global.requestAnimationFrame) {
    exports.globalRequestAnimationFrame = globalRequestAnimationFrame = function globalRequestAnimationFrame(callback) {
        if (typeof callback !== 'function') {
            throw new TypeError(callback + 'is not a function');
        }

        var currentTime = Date.now(),
            delay = 16 + lastTime - currentTime;

        if (delay < 0) {
            delay = 0;
        }

        lastTime = currentTime;

        return setTimeout(function () {
            lastTime = Date.now();
            callback(performance.now());
        }, delay);
    };
}

if (!global.cancelAnimationFrame) {
    exports.globalCancelAnimationFrame = globalCancelAnimationFrame = function globalCancelAnimationFrame(id) {
        clearTimeout(id);
    };
}

function setGlobalPerformance(value) {
    exports.globalPerformance = globalPerformance = value;
}

function setGlobalRequestAnimationFrame(value) {
    exports.globalRequestAnimationFrame = globalRequestAnimationFrame = value;
}

function setGlobalCancelAnimationFrame(value) {
    exports.globalCancelAnimationFrame = globalCancelAnimationFrame = value;
}