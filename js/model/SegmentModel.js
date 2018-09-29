"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var util_1 = require("../util");
var SegmentModel = /** @class */ (function () {
    function SegmentModel(type, data, content, id) {
        this.type = type;
        this.data = data;
        this.content = content;
        this.id = id || util_1.randomHash();
    }
    SegmentModel.prototype.setContent = function (content) {
        this.content = content;
    };
    SegmentModel.prototype.setData = function (data) {
        this.data = data;
    };
    SegmentModel.prototype.toJS = function () {
        return {
            type: this.type,
            data: this.data,
            content: this.content,
            id: this.id
        };
    };
    SegmentModel.fromJS = function (obj) {
        return new SegmentModel(obj.type, obj.data, obj.content, obj.id);
    };
    __decorate([
        mobx_1.observable
    ], SegmentModel.prototype, "data", void 0);
    __decorate([
        mobx_1.observable
    ], SegmentModel.prototype, "content", void 0);
    __decorate([
        mobx_1.action
    ], SegmentModel.prototype, "setContent", null);
    __decorate([
        mobx_1.action
    ], SegmentModel.prototype, "setData", null);
    return SegmentModel;
}());
exports.default = SegmentModel;
//# sourceMappingURL=SegmentModel.js.map