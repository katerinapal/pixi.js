"use strict";
/**
 * Mixins functionality to make an object have "plugins".
 *
 * @mixin
 * @memberof PIXI.utils
 * @param obj {object} The object to mix into.
 * @example
 *      function MyObject() {}
 *
 *      pluginTarget.mixin(MyObject);
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
function pluginTarget(obj) {
    obj.__plugins = {};

    /**
     * Adds a plugin to an object
     *
     * @param pluginName {string} The events that should be listed.
     * @param ctor {Function} The constructor function for the plugin.
     */
    obj.registerPlugin = function (pluginName, ctor) {
        obj.__plugins[pluginName] = ctor;
    };

    /**
     * Instantiates all the plugins of this object
     *
     */
    obj.prototype.initPlugins = function () {
        this.plugins = this.plugins || {};

        for (var o in obj.__plugins) {
            this.plugins[o] = new obj.__plugins[o](this);
        }
    };

    /**
     * Removes all the plugins of this object
     *
     */
    obj.prototype.destroyPlugins = function () {
        for (var o in this.plugins) {
            this.plugins[o].destroy();
            this.plugins[o] = null;
        }

        this.plugins = null;
    };
}

exports.pluginTargetjs = mod_pluginTargetjs = {
    /**
     * Mixes in the properties of the pluginTarget into another object
     *
     * @param obj {object} The obj to mix into
     */
    mixin: function mixin(obj) {
        pluginTarget(obj);
    }
};
var mod_pluginTargetjs;
exports.pluginTargetjs = mod_pluginTargetjs;