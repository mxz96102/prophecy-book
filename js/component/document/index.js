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
var TitleBlock_1 = require("./TitleBlock");
var CodeBlock_1 = require("./CodeBlock");
var TextBlock_1 = require("./TextBlock");
var Document = /** @class */ (function (_super) {
    __extends(Document, _super);
    function Document() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Document.prototype.selectBlock = function (e, id) {
        e.stopPropagation();
        this.props.store.setSelect(id);
    };
    Document.prototype.render = function () {
        var _this = this;
        var store = this.props.store;
        return (React.createElement("div", { className: "document", onDoubleClick: function (e) { return _this.selectBlock(e, ""); } },
            React.createElement(TitleBlock_1.default, { store: store, isActive: store.selectId === "title", onDoubleClick: function (e) { return _this.selectBlock(e, "title"); } }),
            store.segments.map(function (segment) {
                switch (segment.type) {
                    case "TEXT":
                        return React.createElement(TextBlock_1.default, { key: segment.id, isActive: store.selectId === segment.id, onDoubleClick: function (e) { return _this.selectBlock(e, segment.id); }, segment: segment, store: store });
                    case "CODE":
                        return React.createElement(CodeBlock_1.default, { key: segment.id, isActive: store.selectId === segment.id, onDoubleClick: function (e) { return _this.selectBlock(e, segment.id); }, segment: segment, store: store });
                }
            })));
    };
    Document = __decorate([
        mobx_react_1.observer
    ], Document);
    return Document;
}(React.Component));
exports.default = Document;
//# sourceMappingURL=index.js.map