"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var mobx_react_1 = require("mobx-react");
var classnames_1 = require("classnames");
var react_fa_1 = require("react-fa");
var Toolbar = mobx_react_1.observer(['store'], function (_a) {
    var store = _a.store;
    return React.createElement("div", { className: "toolbar" },
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
            " \u8FD0\u884CCode"));
});
exports.default = Toolbar;
//# sourceMappingURL=Toolbar.js.map