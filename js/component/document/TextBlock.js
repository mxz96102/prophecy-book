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
var md = require("markdown-it");
var mobx_react_1 = require("mobx-react");
var react_codemirror2_1 = require("react-codemirror2");
require("codemirror/mode/markdown/markdown");
var options = {
    mode: 'markdown',
    theme: 'idea',
    lineNumbers: false
};
var markdown = new md();
var TextBlock = /** @class */ (function (_super) {
    __extends(TextBlock, _super);
    function TextBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBlock.prototype.render = function () {
        var _a = this.props, _b = _a.isActive, isActive = _b === void 0 ? false : _b, onDoubleClick = _a.onDoubleClick, segment = _a.segment;
        return (React.createElement("section", { className: classnames_1.default("block", "text", { active: isActive }), onDoubleClick: onDoubleClick },
            isActive
                ? React.createElement(react_codemirror2_1.Controlled, { value: segment.content, options: options, onBeforeChange: function (editor, data, value) {
                        segment.setContent(value);
                    } })
                : React.createElement("div", { className: "md-text", dangerouslySetInnerHTML: { __html: markdown.render(segment.content) } }),
            React.createElement("span", { className: "type-tag" }, "Markdown")));
    };
    TextBlock = __decorate([
        mobx_react_1.observer
    ], TextBlock);
    return TextBlock;
}(React.Component));
exports.default = TextBlock;
//# sourceMappingURL=TextBlock.js.map