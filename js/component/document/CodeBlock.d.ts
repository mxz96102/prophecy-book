import * as React from 'react';
import ViewStore from "../../store/ViewStore";
import SegmentModel from '../../model/SegmentModel';
import "codemirror/mode/javascript/javascript";
declare const CodeBlock: React.SFC<{
    store?: ViewStore;
    onDoubleClick: React.MouseEventHandler;
    isActive: boolean;
    segment: SegmentModel;
    key: string;
}>;
export default CodeBlock;
