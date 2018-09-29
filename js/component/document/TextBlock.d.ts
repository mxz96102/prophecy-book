import * as React from 'react';
import ViewStore from "../../store/ViewStore";
import SegmentModel from '../../model/SegmentModel';
declare const TextBlock: React.SFC<{
    store?: ViewStore;
    onDoubleClick: React.MouseEventHandler;
    isActive: boolean;
    segment: SegmentModel;
    key: string;
}>;
export default TextBlock;
