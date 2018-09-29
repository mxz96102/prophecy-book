import * as React from 'react';
import ViewStore from "../../store/ViewStore";
declare const TitleBlock: React.SFC<{
    store?: ViewStore;
    onDoubleClick: React.MouseEventHandler;
    isActive: boolean;
}>;
export default TitleBlock;
