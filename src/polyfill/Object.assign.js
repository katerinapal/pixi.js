"use strict";

var _objectAssign = require("object-assign");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

"use strict";
// References:
// https://github.com/sindresorhus/object-assign
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

if (!Object.assign) {
    Object.assign = _objectAssign2.default;
}