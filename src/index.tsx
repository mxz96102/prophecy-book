import * as React from "react";
import * as ReactDOM from "react-dom";
import { observer } from "mobx-react";
import Header from "./component/header";
import Document from "./component/document";
import ViewStore from "./store/ViewStore";
import { safeEval } from "./tensorflow";

@observer
class App extends React.Component {
    render() {
        const {store} = this.props;

        return (
            <div className="app">
                <Header store={store} />
                <Document store={store} />
            </div>
        )
    }
}

ReactDOM.render(
    <App store={new ViewStore()} />,
    document.getElementById("root")
);