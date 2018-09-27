"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var mobx_react_1 = require("mobx-react");
var TitleBlock = /** @class */ (function (_super) {
    __extends(TitleBlock, _super);
    function TitleBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleTitleChange = function (_a) {
            var title = _a.target.value;
            return _this.props.store.setTitle(title);
        };
        return _this;
    }
    TitleBlock.prototype.render = function () {
        var _a = this.props.store, title = _a.title, date = _a.date;
        var _b = this.props, isActive = _b.isActive, onDoubleClick = _b.onDoubleClick;
        return (React.createElement("section", { className: classnames_1.default("block", "title", { active: isActive }), onDoubleClick: onDoubleClick },
            React.createElement("h1", null,
                React.createElement("input", { className: "title", onChange: this.handleTitleChange, type: "text", value: title })),
            React.createElement("span", { className: "time" },
                "\u4FDD\u5B58\u65F6\u95F4\uFF1A",
                date.toLocaleString()),
            React.createElement("span", { className: "type-tag" }, "\u6807 \u9898")));
    };
    TitleBlock = __decorate([
        mobx_react_1.observer
    ], TitleBlock);
    return TitleBlock;
}(React.Component));
exports.default = TitleBlock;
//# sourceMappingURL=TitleBlock.js.map