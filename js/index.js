"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var mobx_react_1 = require("mobx-react");
var header_1 = require("./component/header");
var document_1 = require("./component/document");
var ViewStore_1 = require("./store/ViewStore");
require("codemirror/lib/codemirror.css");
require("codemirror/theme/idea.css");
require("./index.less");
var App = mobx_react_1.observer(['store'], function (_a) {
    var store = _a.store;
    return React.createElement("div", { className: "app" },
        React.createElement(header_1.default, null),
        React.createElement(document_1.default, null));
});
ReactDOM.render(React.createElement(mobx_react_1.Provider, { store: new ViewStore_1.default },
    React.createElement(App, null)), document.getElementById("root"));
//# sourceMappingURL=index.js.map