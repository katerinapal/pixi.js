import objectassign from "object-assign";
// References:
// https://github.com/sindresorhus/object-assign
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

if (!Object.assign)
{
    Object.assign = objectassign;
}
