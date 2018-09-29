import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider, observer, inject } from "mobx-react";
import Header from "./component/header";
import Document from "./component/document";
import ViewStore from "./store/ViewStore";
import { safeEval } from "./tensorflow";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/idea.css";
import "./index.less";

const App = observer(['store'], ({store}) => 
            <div className="app">
                <Header/>
                <Document/>
            </div>
)

ReactDOM.render(
    <Provider store={new ViewStore} >
        <App />
    </Provider>,
    document.getElementById("root")
);