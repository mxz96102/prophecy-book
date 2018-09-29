"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var mobx_react_1 = require("mobx-react");
var TitleBlock = mobx_react_1.observer(['store'], function (_a) {
    var _b = _a.store, title = _b.title, date = _b.date, setTitle = _b.setTitle, isActive = _a.isActive, onDoubleClick = _a.onDoubleClick;
    return React.createElement("section", { className: classnames_1.default("block", "title", { active: isActive }), onDoubleClick: onDoubleClick },
        React.createElement("h1", null,
            React.createElement("input", { className: "title", onChange: function (_a) {
                    var title = _a.target.value;
                    return setTitle(title);
                }, type: "text", value: title })),
        React.createElement("span", { className: "time" },
            "\u4FDD\u5B58\u65F6\u95F4\uFF1A",
            date.toLocaleString()),
        React.createElement("span", { className: "type-tag" }, "\u6807 \u9898"));
});
exports.default = TitleBlock;
//# sourceMappingURL=TitleBlock.js.map