import * as React from 'react';
import { observer } from "mobx-react";
import TitleBlock from './TitleBlock';
import CodeBlock from './CodeBlock';
import TextBlock from './TextBlock';

@observer
class Document extends React.Component {
    selectBlock(e, id) {
        e.stopPropagation();
        this.props.store.setSelect(id);
    }

    render() {
        const { store } = this.props;

        return (
            <div className="document" onDoubleClick={(e) => this.selectBlock(e, "")}>
                <TitleBlock store={store} isActive={store.selectId === "title"} onDoubleClick={(e) => this.selectBlock(e, "title")}/>
                {
                    store.segments.map( segment => {
                        switch (segment.type) {
                            case "TEXT":
                            return <TextBlock key={segment.id} isActive={store.selectId === segment.id} onDoubleClick={(e) => this.selectBlock(e, segment.id)} segment={segment}/>
                            case "CODE":
                            return <CodeBlock key={segment.id} isActive={store.selectId === segment.id} onDoubleClick={(e) => this.selectBlock(e, segment.id)} segment={segment}/>
                        }
                    })
                }            
            </div>
        )
    }
}

export default Document;