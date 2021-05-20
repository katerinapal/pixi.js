"use strict";

var _core = require("../core");

"use strict";

/**
 * The instance name of the object.
 *
 * @memberof PIXI.DisplayObject#
 * @member {string}
 */
_core.core.DisplayObject.prototype.name = null;

/**
* Returns the display object in the container
*
* @memberof PIXI.Container#
* @param name {string} instance name
* @return {PIXI.DisplayObject}
*/
_core.core.Container.prototype.getChildByName = function (name) {
    for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].name === name) {
            return this.children[i];
        }
    }
    return null;
};