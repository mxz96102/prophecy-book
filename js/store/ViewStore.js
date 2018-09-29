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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
    ViewStore.prototype.resetData = function () {
        this.data = {};
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
    ViewStore.prototype.runCode = function (seg) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, content, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = seg.content, content = _a === void 0 ? "" : _a;
                        seg.setData("正在运行中，请稍后");
                        return [4 /*yield*/, tensorflow_1.safeEval(content, this.data)];
                    case 1:
                        res = _b.sent();
                        seg.setData(res);
                        this.updateData(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewStore.prototype.runNowCode = function () {
        var seg = this.selectedSeg;
        if (seg) {
            this.runCode(seg);
        }
    };
    ViewStore.prototype.runAllCode = function () {
        this.resetData();
        for (var _i = 0, _a = this.segments; _i < _a.length; _i++) {
            var segment = _a[_i];
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
    ], ViewStore.prototype, "resetData", null);
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
    ], ViewStore.prototype, "runCode", null);
    __decorate([
        mobx_1.action
    ], ViewStore.prototype, "runNowCode", null);
    __decorate([
        mobx_1.action
    ], ViewStore.prototype, "runAllCode", null);
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