"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.spritesheetParserjs = undefined;

var _resourceLoader = require("resource-loader");

var _resourceLoader2 = _interopRequireDefault(_resourceLoader);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _core = require("../core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Resource = _resourceLoader2.default.Resource;

var BATCH_SIZE = 1000;

var exportedObject = function exportedObject() {
    return function (resource, next) {
        var resourcePath;
        var imageResourceName = resource.name + '_image';

        // skip if no data, its not json, it isn't spritesheet data, or the image resource already exists
        if (!resource.data || !resource.isJson || !resource.data.frames || this.resources[imageResourceName]) {
            return next();
        }

        var loadOptions = {
            crossOrigin: resource.crossOrigin,
            loadType: Resource.LOAD_TYPE.IMAGE,
            metadata: resource.metadata.imageMetadata
        };

        // Prepend url path unless the resource image is a data url
        if (resource.isDataUrl) {
            resourcePath = resource.data.meta.image;
        } else {
            resourcePath = _path2.default.dirname(resource.url.replace(this.baseUrl, '')) + '/' + resource.data.meta.image;
        }

        // load the image for this sheet
        this.add(imageResourceName, resourcePath, loadOptions, function (res) {
            resource.textures = {};

            var frames = resource.data.frames;
            var frameKeys = Object.keys(frames);
            var resolution = _core.core.utils.getResolutionOfUrl(resource.url);
            var batchIndex = 0;

            function processFrames(initialFrameIndex, maxFrames) {
                var frameIndex = initialFrameIndex;

                while (frameIndex - initialFrameIndex < maxFrames && frameIndex < frameKeys.length) {
                    var i = frameKeys[frameIndex];
                    var rect = frames[i].frame;

                    if (rect) {

                        var frame = null;
                        var trim = null;
                        var orig = new _core.core.Rectangle(0, 0, frames[i].sourceSize.w / resolution, frames[i].sourceSize.h / resolution);

                        if (frames[i].rotated) {
                            frame = new _core.core.Rectangle(rect.x / resolution, rect.y / resolution, rect.h / resolution, rect.w / resolution);
                        } else {
                            frame = new _core.core.Rectangle(rect.x / resolution, rect.y / resolution, rect.w / resolution, rect.h / resolution);
                        }

                        //  Check to see if the sprite is trimmed
                        if (frames[i].trimmed) {
                            trim = new _core.core.Rectangle(frames[i].spriteSourceSize.x / resolution, frames[i].spriteSourceSize.y / resolution, frames[i].spriteSourceSize.w / resolution, frames[i].spriteSourceSize.h / resolution);
                        }

                        resource.textures[i] = new _core.core.Texture(res.texture.baseTexture, frame, orig, trim, frames[i].rotated ? 2 : 0);

                        // lets also add the frame to pixi's global cache for fromFrame and fromImage functions
                        _core.core.utils.TextureCache[i] = resource.textures[i];
                    }

                    frameIndex++;
                }
            }

            function shouldProcessNextBatch() {
                return batchIndex * BATCH_SIZE < frameKeys.length;
            }

            function processNextBatch(done) {
                processFrames(batchIndex * BATCH_SIZE, BATCH_SIZE);
                batchIndex++;
                setTimeout(done, 0);
            }

            function iteration() {
                processNextBatch(function () {
                    if (shouldProcessNextBatch()) {
                        iteration();
                    } else {
                        next();
                    }
                });
            }

            if (frameKeys.length <= BATCH_SIZE) {
                processFrames(0, BATCH_SIZE);
                next();
            } else {
                iteration();
            }
        });
    };
};

exports.spritesheetParserjs = exportedObject;
;
