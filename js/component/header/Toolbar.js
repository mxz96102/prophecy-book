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
var mobx_react_1 = require("mobx-react");
var classnames_1 = require("classnames");
var react_fa_1 = require("react-fa");
var Toolbar = /** @class */ (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toolbar.prototype.render = function () {
        var store = this.props.store;
        return (React.createElement("div", { className: "toolbar" },
            React.createElement("span", { className: classnames_1.default("tool", { disabled: true }) },
                React.createElement(react_fa_1.Icon, { name: "save" }),
                " \u4FDD\u5B58"),
            React.createElement("span", { className: "tool", onClick: function () { return store.newSeg('TEXT', {}, "双击修改markdown文本"); } },
                React.createElement(react_fa_1.Icon, { name: "plus-square" }),
                " \u6587\u672C\u5757"),
            React.createElement("span", { className: "tool", onClick: function () { return store.newSeg("CODE", {}, ""); } },
                React.createElement(react_fa_1.Icon, { name: "plus-square" }),
                " \u4EE3\u7801\u5757"),
            React.createElement("span", { className: "tool", onClick: function () { return store.deleteSelectSeg(); } },
                React.createElement(react_fa_1.Icon, { name: "minus-square" }),
                " \u5220\u9664\u5757"),
            React.createElement("span", { className: classnames_1.default("tool", { disabled: store.selectedSeg && store.selectedSeg.type !== "CODE" }), onClick: function () { return store.runNowCode(); } },
                React.createElement(react_fa_1.Icon, { name: "play" }),
                " \u8FD0\u884CCode")));
    };
    Toolbar = __decorate([
        mobx_react_1.observer
    ], Toolbar);
    return Toolbar;
}(React.Component));
exports.default = Toolbar;
//# sourceMappingURL=Toolbar.js.map