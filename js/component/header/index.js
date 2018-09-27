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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Toolbar_1 = require("./Toolbar");
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        var store = this.props.store;
        return (React.createElement("header", { className: "header" },
            React.createElement("div", { className: "logo" }),
            React.createElement("div", { className: "content" },
                React.createElement("div", { className: "menu" }, "\uD83D\uDCD6  Prophecy Book - Notebook for Javascript AI"),
                React.createElement(Toolbar_1.default, { store: store }))));
    };
    return Header;
}(React.Component));
exports.default = Header;
//# sourceMappingURL=index.js.map