import * as React from 'react';
import { observer } from "mobx-react";
import TitleBlock from './TitleBlock';
import CodeBlock from './CodeBlock';
import TextBlock from './TextBlock';

@observer
class Document extends React.Component {
    selectBlock(e, id) {
        e.preventDefault();
        this.props.store.setSelect(id);
    }

    render() {
        const { store } = this.props;

        return (
            <div className="document">
                <TitleBlock store={store} isActive={store.selectId === "title"} onClick={(e) => selectBlock(e, "title")}/>
                <TextBlock isActive={store.selectId === "text"} onClick={(e) => selectBlock(e, "text")}/>
                <CodeBlock isActive={store.selectId === "code"} onClick={(e) => selectBlock(e, "code")}/>
            </div>
        )
    }
}

export default Document;