"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var mobx_react_1 = require("mobx-react");
var TitleBlock_1 = require("./TitleBlock");
var CodeBlock_1 = require("./CodeBlock");
var TextBlock_1 = require("./TextBlock");
var Document = mobx_react_1.observer(['store'], function (_a) {
    var store = _a.store;
    return React.createElement("div", { className: "document", onDoubleClick: function (e) { return store.setSelect(""); } },
        React.createElement(TitleBlock_1.default, { isActive: store.selectId === "title", onDoubleClick: function (e) {
                e.stopPropagation();
                store.setSelect('title');
            } }),
        store.segments.map(function (segment) {
            var props = {
                key: segment.id,
                isActive: store.selectId === segment.id,
                segment: segment,
                onDoubleClick: function (e) {
                    e.stopPropagation();
                    store.setSelect(segment.id);
                }
            };
            switch (segment.type) {
                case "TEXT":
                    return React.createElement(TextBlock_1.default, __assign({}, props));
                case "CODE":
                    return React.createElement(CodeBlock_1.default, __assign({}, props));
            }
        }));
});
exports.default = Document;
//# sourceMappingURL=index.js.map