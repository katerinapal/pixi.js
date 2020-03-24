"use strict";

var _core = require("../core");

/**
* Returns the global position of the displayObject
*
* @memberof PIXI.DisplayObject#
* @param point {Point} the point to write the global value to. If null a new point will be returned
* @return {Point}
*/
_core.core.DisplayObject.prototype.getGlobalPosition = function (point) {
    point = point || new _core.core.Point();

    if (this.parent) {
        this.displayObjectUpdateTransform();

        point.x = this.worldTransform.tx;
        point.y = this.worldTransform.ty;
    } else {
        point.x = this.position.x;
        point.y = this.position.y;
    }

    return point;
};
