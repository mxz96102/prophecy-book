"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var MarkdownIt = require("markdown-it");
var mobx_react_1 = require("mobx-react");
var react_codemirror2_1 = require("react-codemirror2");
require("codemirror/mode/markdown/markdown");
var options = {
    mode: 'markdown',
    theme: 'idea',
    lineNumbers: false
};
var markdown = new MarkdownIt();
var TextBlock = mobx_react_1.observer(['store'], function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, onDoubleClick = _a.onDoubleClick, segment = _a.segment;
    return React.createElement("section", { className: classnames_1.default("block", "text", { active: isActive }), onDoubleClick: onDoubleClick },
        isActive
            ? React.createElement(react_codemirror2_1.Controlled, { value: segment.content, options: options, onBeforeChange: function (editor, data, value) {
                    segment.setContent(value);
                } })
            : React.createElement("div", { className: "md-text", dangerouslySetInnerHTML: { __html: markdown.render(segment.content) } }),
        React.createElement("span", { className: "type-tag" }, "Markdown"));
});
exports.default = TextBlock;
//# sourceMappingURL=TextBlock.js.map