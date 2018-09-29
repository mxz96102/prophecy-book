"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Toolbar_1 = require("./Toolbar");
var mobx_react_1 = require("mobx-react");
var Header = mobx_react_1.observer([], function () {
    return React.createElement("header", { className: "header" },
        React.createElement("div", { className: "logo" }),
        React.createElement("div", { className: "content" },
            React.createElement("div", { className: "menu" }, "\uD83D\uDCD6  Prophecy Book - Notebook for Javascript AI"),
            React.createElement(Toolbar_1.default, null)));
});
exports.default = Header;
//# sourceMappingURL=index.js.map