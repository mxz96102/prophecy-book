import * as React from 'react';
import { observer } from "mobx-react";
import ViewStore from "../../store/ViewStore";
import TitleBlock from './TitleBlock';
import CodeBlock from './CodeBlock';
import TextBlock from './TextBlock';
import SegmentModel from '../../model/SegmentModel';

@observer
class Document extends React.Component<{store: ViewStore}> {
    selectBlock(e:React.MouseEvent, id: string) {
        e.stopPropagation();
        this.props.store.setSelect(id);
    }

    render() {
        const { store } = this.props;

        return (
            <div className="document" onDoubleClick={(e) => this.selectBlock(e, "")}>
                <TitleBlock store={store} isActive={store.selectId === "title"} onDoubleClick={(e: React.MouseEvent) => this.selectBlock(e, "title")}/>
                {
                    store.segments.map( (segment: SegmentModel) => {
                        switch (segment.type) {
                            case "TEXT":
                            return <TextBlock key={segment.id} isActive={store.selectId === segment.id} onDoubleClick={(e) => this.selectBlock(e, segment.id)} segment={segment} store={store}/>
                            case "CODE":
                            return <CodeBlock key={segment.id} isActive={store.selectId === segment.id} onDoubleClick={(e) => this.selectBlock(e, segment.id)} segment={segment} store={store}/>
                        }
                    })
                }            
            </div>
        )
    }
}

export default Document;