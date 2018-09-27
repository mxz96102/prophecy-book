import * as React from 'react';
import ViewStore from "../../store/ViewStore";
declare class Header extends React.Component<{
    store: ViewStore;
}> {
    render(): JSX.Element;
}
export default Header;
