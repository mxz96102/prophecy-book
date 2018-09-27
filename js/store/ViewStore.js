"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var SegmentModel_1 = require("../model/SegmentModel");
var tensorflow_1 = require("../tensorflow");
var ViewStore = /** @class */ (function () {
    function ViewStore() {
        this.segments = [];
        this.data = {};
        this.date = new Date();
        this.title = "Untitled Book";
        this.selectId = "title";
    }
    Object.defineProperty(ViewStore.prototype, "selectedSeg", {
        get: function () {
            var _this = this;
            return this.segments.find(function (seg) { return seg.id === _this.selectId; });
        },
        enumerable: true,
        configurable: true
    });
    ViewStore.prototype.setTitle = function (title) {
        this.title = title;
    };
    ViewStore.prototype.updateData = function (data) {
        this.data = __assign({}, this.data, data);
    };
    ViewStore.prototype.setSelect = function (id) {
        this.selectId = id;
    };
    ViewStore.prototype.newSeg = function (type, data, content) {
        this.segments.push(new SegmentModel_1.default(type, data, content));
    };
    ViewStore.prototype.deleteSeg = function (id) {
        this.segments = this.segments.filter(function (seg) { return seg.id !== id; });
    };
    ViewStore.prototype.insertSeg = function (_a) {
        var type = _a.type, data = _a.data, content = _a.content, id = _a.id;
        this.segments.push(new SegmentModel_1.default(type, data, content, id));
    };
    ViewStore.prototype.deleteSelectSeg = function () {
        if (this.selectId !== "title")
            this.deleteSeg(this.selectId);
    };
    ViewStore.prototype.runNowCode = function () {
        var _this = this;
        var seg = this.selectedSeg;
        if (seg) {
            var _a = seg.content, content = _a === void 0 ? "" : _a;
            seg.setData("正在运行中，请稍后");
            tensorflow_1.safeEval(content, this.data)
                .then(function (res) { seg.setData(res), _this.updateData(res); });
        }
    };
    ViewStore.prototype.fromJS = function (obj) {
        var _this = this;
        this.segments = this.segments.slice(0);
        obj.segments.map(function (segment) { return _this.insertSeg(segment); });
        this.title = obj.title;
        this.date = new Date(obj.date);
    };
    ViewStore.prototype.toJS = function () {
        return {
            segments: this.segments.map(function (seg) { return seg.toJS(); }),
            title: this.title,
            date: +this.date,
            data: this.data
        };
    };
    __decorate([
        mobx_1.observable
    ], ViewStore.prototype, "segments", void 0);
    __decorate([
        mobx_1.observable
    ], ViewStore.prototype, "data", void 0);
    __decorate([
        mobx_1.observable
    ], ViewStore.prototype, "date", void 0);
    __decorate([
        mobx_1.observable
    ], ViewStore.prototype, "title", void 0);
    __decorate([
        mobx_1.observable
    ], ViewStore.prototype, "selectId", void 0);
    __decorate([
        mobx_1.computed
    ], ViewStore.prototype, "selectedSeg", null);
    __decorate([
        mobx_1.action
    ], ViewStore.prototype, "setTitle", null);
    __decorate([
        mobx_1.action
    ], ViewStore.prototype, "updateData", null);
    __decorate([
        mobx_1.action
    ], ViewStore.prototype, "setSelect", null);
    __decorate([
        mobx_1.action
    ], ViewStore.prototype, "newSeg", null);
    __decorate([
        mobx_1.action
    ], ViewStore.prototype, "deleteSeg", null);
    __decorate([
        mobx_1.action
    ], ViewStore.prototype, "insertSeg", null);
    __decorate([
        mobx_1.action
    ], ViewStore.prototype, "deleteSelectSeg", null);
    __decorate([
        mobx_1.action
    ], ViewStore.prototype, "runNowCode", null);
    __decorate([
        mobx_1.action
    ], ViewStore.prototype, "fromJS", null);
    __decorate([
        mobx_1.action
    ], ViewStore.prototype, "toJS", null);
    return ViewStore;
}());
exports.default = ViewStore;
//# sourceMappingURL=ViewStore.js.map