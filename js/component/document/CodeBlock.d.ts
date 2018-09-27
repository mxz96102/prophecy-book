import * as React from 'react';
import ViewStore from "../../store/ViewStore";
import SegmentModel from '../../model/SegmentModel';
declare class CodeBlock extends React.Component<{
    store: ViewStore;
    onDoubleClick: React.MouseEventHandler;
    isActive: boolean;
    segment: SegmentModel;
    key: string;
}> {
    instance: any;
    render(): JSX.Element;
}
export default CodeBlock;
