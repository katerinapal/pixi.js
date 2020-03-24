import { Matrix as Matrix_Matrixjs } from "./Matrix";
// Your friendly neighbour https://en.wikipedia.org/wiki/Dihedral_group of order 16

var ux = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1];
var uy = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1];
var vx = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1];
var vy = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1];
var tempMatrices = [];

var mul = [];

function signum(x) {
    if (x < 0) {
        return -1;
    }
    if (x > 0) {
        return 1;
    }
    return 0;
}

function init() {
    for (var i = 0; i < 16; i++) {
        var row = [];
        mul.push(row);
        for (var j = 0; j < 16; j++) {
            var _ux = signum(ux[i] * ux[j] + vx[i] * uy[j]);
            var _uy = signum(uy[i] * ux[j] + vy[i] * uy[j]);
            var _vx = signum(ux[i] * vx[j] + vx[i] * vy[j]);
            var _vy = signum(uy[i] * vx[j] + vy[i] * vy[j]);
            for (var k = 0; k < 16; k++) {
                if (ux[k] === _ux && uy[k] === _uy && vx[k] === _vx && vy[k] === _vy) {
                    row.push(k);
                    break;
                }
            }
        }
    }

    for (i=0;i<16;i++) {
        var mat = new Matrix_Matrixjs();
        mat.set(ux[i], uy[i], vx[i], vy[i], 0, 0);
        tempMatrices.push(mat);
    }
}

init();

var GroupD8_E = 0;
var GroupD8_SE = 1;
var GroupD8_S = 2;
var GroupD8_SW = 3;
var GroupD8_W = 4;
var GroupD8_NW = 5;
var GroupD8_N = 6;
var GroupD8_NE = 7;
var GroupD8_MIRROR_VERTICAL = 8;
var GroupD8_MIRROR_HORIZONTAL = 12;

var GroupD8_uX = function(ind) {
    return ux[ind];
};

var GroupD8_uY = function(ind) {
    return uy[ind];
};

var GroupD8_vX = function(ind) {
    return vx[ind];
};

var GroupD8_vY = function(ind) {
    return vy[ind];
};

var GroupD8_inv = function(rotation) {
    if (rotation & 8) {
        return rotation & 15;
    }
    return -rotation & 7;
};

var GroupD8_add = function(rotationSecond, rotationFirst) {
    return mul[rotationSecond][rotationFirst];
};

var GroupD8_sub = function(rotationSecond, rotationFirst) {
    return mul[rotationSecond][GroupD8.inv(rotationFirst)];
};

var GroupD8_rotate180 = function(rotation) {
    return rotation ^ 4;
};

var GroupD8_isSwapWidthHeight = function(rotation) {
    return (rotation & 3) === 2;
};

var GroupD8_byDirection = function(dx, dy) {
    if (Math.abs(dx) * 2 <= Math.abs(dy)) {
        if (dy >= 0) {
            return GroupD8.S;
        } else {
            return GroupD8.N;
        }
    } else if (Math.abs(dy) * 2 <= Math.abs(dx)) {
        if (dx > 0) {
            return GroupD8.E;
        } else {
            return GroupD8.W;
        }
    } else {
        if (dy > 0) {
            if (dx > 0) {
                return GroupD8.SE;
            } else {
                return GroupD8.SW;
            }
        } else if (dx > 0) {
            return GroupD8.NE;
        } else {
            return GroupD8.NW;
        }
    }
};

var GroupD8_matrixAppendRotationInv = function(matrix, rotation, tx, ty) {
    //Packer used "rotation", we use "inv(rotation)"
    var mat = tempMatrices[GroupD8.inv(rotation)];
    tx = tx || 0;
    ty = ty || 0;
    mat.tx = tx;
    mat.ty = ty;
    matrix.append(mat);
};

export { GroupD8_NW as NW, GroupD8_uX as uX, GroupD8_uY as uY, GroupD8_add as add };
