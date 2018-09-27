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
var react_codemirror2_1 = require("react-codemirror2");
require("codemirror/mode/javascript/javascript");
var options = {
    mode: 'javascript',
    theme: 'idea',
    lineNumbers: false,
};
var CodeBlock = /** @class */ (function (_super) {
    __extends(CodeBlock, _super);
    function CodeBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.instance = null;
        return _this;
    }
    CodeBlock.prototype.render = function () {
        var _this = this;
        var _a = this.props, onDoubleClick = _a.onDoubleClick, isActive = _a.isActive, segment = _a.segment;
        return (React.createElement("section", { className: classnames_1.default("block", "code", { active: isActive }), onDoubleClick: onDoubleClick },
            React.createElement(react_codemirror2_1.Controlled, { value: segment.content, options: options, onBeforeChange: function (editor, data, value) {
                    segment.setContent(value);
                }, editorDidMount: function (editor) { _this.instance = editor; } }),
            React.createElement("pre", { className: "result" }, segment.data && JSON.stringify(segment.data, null, 2)),
            React.createElement("span", { className: "type-tag" }, "\u4EE3 \u7801")));
    };
    CodeBlock = __decorate([
        mobx_react_1.observer
    ], CodeBlock);
    return CodeBlock;
}(React.Component));
exports.default = CodeBlock;
//# sourceMappingURL=CodeBlock.js.map