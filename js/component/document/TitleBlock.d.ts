import * as React from 'react';
import ViewStore from "../../store/ViewStore";
declare class TitleBlock extends React.Component<{
    store: ViewStore;
    onDoubleClick: React.MouseEventHandler;
    isActive: boolean;
}> {
    handleTitleChange: ({ target: { value: title } }: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export default TitleBlock;
