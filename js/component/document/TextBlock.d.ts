import * as React from 'react';
import ViewStore from "../../store/ViewStore";
import SegmentModel from '../../model/SegmentModel';
declare class TextBlock extends React.Component<{
    store: ViewStore;
    onDoubleClick: React.MouseEventHandler;
    isActive: boolean;
    segment: SegmentModel;
    key: string;
}> {
    render(): JSX.Element;
}
export default TextBlock;
