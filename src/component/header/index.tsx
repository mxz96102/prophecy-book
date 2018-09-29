import * as React from 'react';
import ViewStore from "../../store/ViewStore";
import Toolbar from './Toolbar'
import { observer } from 'mobx-react';

const Header = observer(() =>
    <header className="header">
        <div className="logo"></div>
        <div className="content">
            <div className="menu">
                📖  Prophecy Book - Notebook for Javascript AI
            </div>
            <Toolbar />
        </div>
    </header>
)

export default Header;