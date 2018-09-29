import * as React from 'react';
import { observer, inject } from "mobx-react";
import ViewStore from "../../store/ViewStore";
import TitleBlock from './TitleBlock';
import CodeBlock from './CodeBlock';
import TextBlock from './TextBlock';
import SegmentModel from '../../model/SegmentModel';

const Document = inject('store')(observer(({ store }) =>
    <div className="document" onDoubleClick={(e) => store.setSelect("")}>
        <TitleBlock isActive={store.selectId === "title"} onDoubleClick={(e) => {
            e.stopPropagation();
            store.setSelect('title');
        }} />
        {
            store.segments.map((segment: SegmentModel) => {
                const props = {
                    key: segment.id,
                    isActive: store.selectId === segment.id,
                    segment: segment,
                    onDoubleClick: (e: React.MouseEvent) => {
                        e.stopPropagation();
                        store.setSelect(segment.id);
                    }
                }

                switch (segment.type) {
                    case "TEXT":
                        return <TextBlock {...props} />
                    case "CODE":
                        return <CodeBlock {...props} />
                }
            })
        }
    </div>
))

export default Document;