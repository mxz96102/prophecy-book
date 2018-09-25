import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "./component/header";
import Document from "./component/document";
import {safeEval} from "./tensorflow";

ReactDOM.render(
    <div className="app">
        <Header/>
        <Document/>
    </div>,
    document.getElementById("root")
);