"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TextStyle = undefined;

var _const = require("../const");

var _utils = require("../utils");

var mod_TextStyle = TextStyle;

"use strict";

/**
 * A TextStyle Object decorates a Text Object. It can be shared between
 * multiple Text objects. Changing the style will update all text objects using it.
 *
 * @class
 * @memberof PIXI
 * @param [style] {object} The style parameters
 * @param [style.align='left'] {string} Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text
 * @param [style.breakWords=false] {boolean} Indicates if lines can be wrapped within words, it needs wordWrap to be set to true
 * @param [style.dropShadow=false] {boolean} Set a drop shadow for the text
 * @param [style.dropShadowAngle=Math.PI/6] {number} Set a angle of the drop shadow
 * @param [style.dropShadowBlur=0] {number} Set a shadow blur radius
 * @param [style.dropShadowColor='#000000'] {string} A fill style to be used on the dropshadow e.g 'red', '#00FF00'
 * @param [style.dropShadowDistance=5] {number} Set a distance of the drop shadow
 * @param [style.fill='black'] {string|string[]|number|number[]|CanvasGradient|CanvasPattern} A canvas fillstyle that will be used on the
 *      text e.g 'red', '#00FF00'. Can be an array to create a gradient eg ['#000000','#FFFFFF'] @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle|MDN}
 * @param [style.fillGradientType=PIXI.TEXT_GRADIENT.LINEAR_VERTICAL] {number} If fills styles are supplied, this can change the type/direction of the gradient. See {@link PIXI.TEXT_GRADIENT} for possible values
 * @param [style.fontFamily='Arial'] {string} The font family
 * @param [style.fontSize=26] {number|string} The font size (as a number it converts to px, but as a string, equivalents are '26px','20pt','160%' or '1.6em')
 * @param [style.fontStyle='normal'] {string} The font style ('normal', 'italic' or 'oblique')
 * @param [style.fontVariant='normal'] {string} The font variant ('normal' or 'small-caps')
 * @param [style.fontWeight='normal'] {string} The font weight ('normal', 'bold', 'bolder', 'lighter' and '100', '200', '300', '400', '500', '600', '700', 800' or '900')
 * @param [style.letterSpacing=0] {number} The amount of spacing between letters, default is 0
 * @param [style.lineHeight] {number} The line height, a number that represents the vertical space that a letter uses
 * @param [style.lineJoin='miter'] {string} The lineJoin property sets the type of corner created, it can resolve
 *      spiked text issues. Default is 'miter' (creates a sharp corner).
 * @param [style.miterLimit=10] {number} The miter limit to use when using the 'miter' lineJoin mode. This can reduce
 *      or increase the spikiness of rendered text.
 * @param [style.padding=0] {number} Occasionally some fonts are cropped on top or bottom. Adding some padding will
 *      prevent this from happening by adding padding to the top and bottom of text height.
 * @param [style.stroke='black'] {string|number} A canvas fillstyle that will be used on the text stroke e.g 'blue', '#FCFF00'
 * @param [style.strokeThickness=0] {number} A number that represents the thickness of the stroke. Default is 0 (no stroke)
 * @param [style.textBaseline='alphabetic'] {string} The baseline of the text that is rendered.
 * @param [style.wordWrap=false] {boolean} Indicates if word wrap should be used
 * @param [style.wordWrapWidth=100] {number} The width at which text will wrap, it needs wordWrap to be set to true
 */
function TextStyle(style) {
    this.styleID = 0;
    Object.assign(this, this._defaults, style);
}

TextStyle.prototype.constructor = TextStyle;

// Default settings. Explained in the constructor.
TextStyle.prototype._defaults = {
    align: 'left',
    breakWords: false,
    dropShadow: false,
    dropShadowAngle: Math.PI / 6,
    dropShadowBlur: 0,
    dropShadowColor: '#000000',
    dropShadowDistance: 5,
    fill: 'black',
    fillGradientType: _const.CONST.TEXT_GRADIENT.LINEAR_VERTICAL,
    fontFamily: 'Arial',
    fontSize: 26,
    fontStyle: 'normal',
    fontVariant: 'normal',
    fontWeight: 'normal',
    letterSpacing: 0,
    lineHeight: 0,
    lineJoin: 'miter',
    miterLimit: 10,
    padding: 0,
    stroke: 'black',
    strokeThickness: 0,
    textBaseline: 'alphabetic',
    wordWrap: false,
    wordWrapWidth: 100
};

/**
 * Creates a new TextStyle object with the same values as this one.
 * Note that the only the properties of the object are cloned.
 *
 * @return {PIXI.TextStyle} New cloned TextStyle object
 */
TextStyle.prototype.clone = function () {
    var clonedProperties = {};
    for (var key in this._defaults) {
        clonedProperties[key] = this[key];
    }
    return new TextStyle(clonedProperties);
};

/**
 * Resets all properties to the defaults specified in TextStyle.prototype._default
 */
TextStyle.prototype.reset = function () {
    Object.assign(this, this._defaults);
};

/**
 * Create setters and getters for each of the style properties. Converts colors where necessary.
 */
Object.defineProperties(TextStyle.prototype, {
    align: {
        get: function get() {
            return this._align;
        },
        set: function set(align) {
            if (this._align !== align) {
                this._align = align;
                this.styleID++;
            }
        }
    },

    breakWords: {
        get: function get() {
            return this._breakWords;
        },
        set: function set(breakWords) {
            if (this._breakWords !== breakWords) {
                this._breakWords = breakWords;
                this.styleID++;
            }
        }
    },

    dropShadow: {
        get: function get() {
            return this._dropShadow;
        },
        set: function set(dropShadow) {
            if (this._dropShadow !== dropShadow) {
                this._dropShadow = dropShadow;
                this.styleID++;
            }
        }
    },

    dropShadowAngle: {
        get: function get() {
            return this._dropShadowAngle;
        },
        set: function set(dropShadowAngle) {
            if (this._dropShadowAngle !== dropShadowAngle) {
                this._dropShadowAngle = dropShadowAngle;
                this.styleID++;
            }
        }
    },

    dropShadowBlur: {
        get: function get() {
            return this._dropShadowBlur;
        },
        set: function set(dropShadowBlur) {
            if (this._dropShadowBlur !== dropShadowBlur) {
                this._dropShadowBlur = dropShadowBlur;
                this.styleID++;
            }
        }
    },

    dropShadowColor: {
        get: function get() {
            return this._dropShadowColor;
        },
        set: function set(dropShadowColor) {
            var outputColor = getColor(dropShadowColor);
            if (this._dropShadowColor !== outputColor) {
                this._dropShadowColor = outputColor;
                this.styleID++;
            }
        }
    },

    dropShadowDistance: {
        get: function get() {
            return this._dropShadowDistance;
        },
        set: function set(dropShadowDistance) {
            if (this._dropShadowDistance !== dropShadowDistance) {
                this._dropShadowDistance = dropShadowDistance;
                this.styleID++;
            }
        }
    },

    fill: {
        get: function get() {
            return this._fill;
        },
        set: function set(fill) {
            var outputColor = getColor(fill);
            if (this._fill !== outputColor) {
                this._fill = outputColor;
                this.styleID++;
            }
        }
    },

    fillGradientType: {
        get: function get() {
            return this._fillGradientType;
        },
        set: function set(fillGradientType) {
            if (this._fillGradientType !== fillGradientType) {
                this._fillGradientType = fillGradientType;
                this.styleID++;
            }
        }
    },

    fontFamily: {
        get: function get() {
            return this._fontFamily;
        },
        set: function set(fontFamily) {
            if (this.fontFamily !== fontFamily) {
                this._fontFamily = fontFamily;
                this.styleID++;
            }
        }
    },

    fontSize: {
        get: function get() {
            return this._fontSize;
        },
        set: function set(fontSize) {
            if (this._fontSize !== fontSize) {
                this._fontSize = fontSize;
                this.styleID++;
            }
        }
    },

    fontStyle: {
        get: function get() {
            return this._fontStyle;
        },
        set: function set(fontStyle) {
            if (this._fontStyle !== fontStyle) {
                this._fontStyle = fontStyle;
                this.styleID++;
            }
        }
    },

    fontVariant: {
        get: function get() {
            return this._fontVariant;
        },
        set: function set(fontVariant) {
            if (this._fontVariant !== fontVariant) {
                this._fontVariant = fontVariant;
                this.styleID++;
            }
        }
    },

    fontWeight: {
        get: function get() {
            return this._fontWeight;
        },
        set: function set(fontWeight) {
            if (this._fontWeight !== fontWeight) {
                this._fontWeight = fontWeight;
                this.styleID++;
            }
        }
    },

    letterSpacing: {
        get: function get() {
            return this._letterSpacing;
        },
        set: function set(letterSpacing) {
            if (this._letterSpacing !== letterSpacing) {
                this._letterSpacing = letterSpacing;
                this.styleID++;
            }
        }
    },

    lineHeight: {
        get: function get() {
            return this._lineHeight;
        },
        set: function set(lineHeight) {
            if (this._lineHeight !== lineHeight) {
                this._lineHeight = lineHeight;
                this.styleID++;
            }
        }
    },

    lineJoin: {
        get: function get() {
            return this._lineJoin;
        },
        set: function set(lineJoin) {
            if (this._lineJoin !== lineJoin) {
                this._lineJoin = lineJoin;
                this.styleID++;
            }
        }
    },

    miterLimit: {
        get: function get() {
            return this._miterLimit;
        },
        set: function set(miterLimit) {
            if (this._miterLimit !== miterLimit) {
                this._miterLimit = miterLimit;
                this.styleID++;
            }
        }
    },

    padding: {
        get: function get() {
            return this._padding;
        },
        set: function set(padding) {
            if (this._padding !== padding) {
                this._padding = padding;
                this.styleID++;
            }
        }
    },

    stroke: {
        get: function get() {
            return this._stroke;
        },
        set: function set(stroke) {
            var outputColor = getColor(stroke);
            if (this._stroke !== outputColor) {
                this._stroke = outputColor;
                this.styleID++;
            }
        }
    },

    strokeThickness: {
        get: function get() {
            return this._strokeThickness;
        },
        set: function set(strokeThickness) {
            if (this._strokeThickness !== strokeThickness) {
                this._strokeThickness = strokeThickness;
                this.styleID++;
            }
        }
    },

    textBaseline: {
        get: function get() {
            return this._textBaseline;
        },
        set: function set(textBaseline) {
            if (this._textBaseline !== textBaseline) {
                this._textBaseline = textBaseline;
                this.styleID++;
            }
        }
    },

    wordWrap: {
        get: function get() {
            return this._wordWrap;
        },
        set: function set(wordWrap) {
            if (this._wordWrap !== wordWrap) {
                this._wordWrap = wordWrap;
                this.styleID++;
            }
        }
    },

    wordWrapWidth: {
        get: function get() {
            return this._wordWrapWidth;
        },
        set: function set(wordWrapWidth) {
            if (this._wordWrapWidth !== wordWrapWidth) {
                this._wordWrapWidth = wordWrapWidth;
                this.styleID++;
            }
        }
    }
});

/**
 * Utility function to convert hexadecimal colors to strings, and simply return the color if it's a string.
 *
 * @return {string} The color as a string.
 */
function getColor(color) {
    if (typeof color === 'number') {
        return _utils.utils.hex2string(color);
    } else if (Array.isArray(color)) {
        for (var i = 0; i < color.length; ++i) {
            if (typeof color[i] === 'number') {
                color[i] = _utils.utils.hex2string(color[i]);
            }
        }
    }

    return color;
}

/**
 * A TextStyle Object decorates a Text Object. It can be shared between
 * multiple Text objects. Changing the style will update all text objects using it.
 *
 * @class
 * @memberof PIXI
 * @param [style] {object} The style parameters
 * @param [style.align='left'] {string} Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text
 * @param [style.breakWords=false] {boolean} Indicates if lines can be wrapped within words, it needs wordWrap to be set to true
 * @param [style.dropShadow=false] {boolean} Set a drop shadow for the text
 * @param [style.dropShadowAngle=Math.PI/6] {number} Set a angle of the drop shadow
 * @param [style.dropShadowBlur=0] {number} Set a shadow blur radius
 * @param [style.dropShadowColor='#000000'] {string} A fill style to be used on the dropshadow e.g 'red', '#00FF00'
 * @param [style.dropShadowDistance=5] {number} Set a distance of the drop shadow
 * @param [style.fill='black'] {string|string[]|number|number[]|CanvasGradient|CanvasPattern} A canvas fillstyle that will be used on the
 *      text e.g 'red', '#00FF00'. Can be an array to create a gradient eg ['#000000','#FFFFFF'] @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle|MDN}
 * @param [style.fillGradientType=PIXI.TEXT_GRADIENT.LINEAR_VERTICAL] {number} If fills styles are supplied, this can change the type/direction of the gradient. See {@link PIXI.TEXT_GRADIENT} for possible values
 * @param [style.fontFamily='Arial'] {string} The font family
 * @param [style.fontSize=26] {number|string} The font size (as a number it converts to px, but as a string, equivalents are '26px','20pt','160%' or '1.6em')
 * @param [style.fontStyle='normal'] {string} The font style ('normal', 'italic' or 'oblique')
 * @param [style.fontVariant='normal'] {string} The font variant ('normal' or 'small-caps')
 * @param [style.fontWeight='normal'] {string} The font weight ('normal', 'bold', 'bolder', 'lighter' and '100', '200', '300', '400', '500', '600', '700', 800' or '900')
 * @param [style.letterSpacing=0] {number} The amount of spacing between letters, default is 0
 * @param [style.lineHeight] {number} The line height, a number that represents the vertical space that a letter uses
 * @param [style.lineJoin='miter'] {string} The lineJoin property sets the type of corner created, it can resolve
 *      spiked text issues. Default is 'miter' (creates a sharp corner).
 * @param [style.miterLimit=10] {number} The miter limit to use when using the 'miter' lineJoin mode. This can reduce
 *      or increase the spikiness of rendered text.
 * @param [style.padding=0] {number} Occasionally some fonts are cropped on top or bottom. Adding some padding will
 *      prevent this from happening by adding padding to the top and bottom of text height.
 * @param [style.stroke='black'] {string|number} A canvas fillstyle that will be used on the text stroke e.g 'blue', '#FCFF00'
 * @param [style.strokeThickness=0] {number} A number that represents the thickness of the stroke. Default is 0 (no stroke)
 * @param [style.textBaseline='alphabetic'] {string} The baseline of the text that is rendered.
 * @param [style.wordWrap=false] {boolean} Indicates if word wrap should be used
 * @param [style.wordWrapWidth=100] {number} The width at which text will wrap, it needs wordWrap to be set to true
 */
exports.TextStyle = mod_TextStyle;