import * as React from 'react';
import ViewStore from "../../store/ViewStore";
declare class Document extends React.Component<{
    store: ViewStore;
}> {
    selectBlock(e: React.MouseEvent, id: string): void;
    render(): JSX.Element;
}
export default Document;
