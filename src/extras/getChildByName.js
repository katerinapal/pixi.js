import { core as core_core } from "../core";
"use strict";

/**
 * The instance name of the object.
 *
 * @memberof PIXI.DisplayObject#
 * @member {string}
 */
core_core.DisplayObject.prototype.name = null;

/**
* Returns the display object in the container
*
* @memberof PIXI.Container#
* @param name {string} instance name
* @return {PIXI.DisplayObject}
*/
core_core.Container.prototype.getChildByName = function (name)
{
    for (var i = 0; i < this.children.length; i++)
    {
        if (this.children[i].name === name)
        {
            return this.children[i];
        }
    }
    return null;
};
