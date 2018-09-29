"use strict";
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
var CodeBlock = mobx_react_1.observer(['store'], function (_a) {
    var onDoubleClick = _a.onDoubleClick, isActive = _a.isActive, segment = _a.segment;
    return React.createElement("section", { className: classnames_1.default("block", "code", { active: isActive }), onDoubleClick: onDoubleClick },
        React.createElement(react_codemirror2_1.Controlled, { value: segment.content, options: options, onBeforeChange: function (editor, data, value) {
                segment.setContent(value);
            } }),
        React.createElement("pre", { className: "result" }, segment.data && JSON.stringify(segment.data, null, 2)),
        React.createElement("span", { className: "type-tag" }, "\u4EE3 \u7801"));
});
exports.default = CodeBlock;
//# sourceMappingURL=CodeBlock.js.map