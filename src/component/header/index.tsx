import * as React from 'react';
import Toolbar from './Toolbar'

class Header extends React.Component {
    render() {
        const { store } = this.props;

        return (
            <header className="header">
                <div className="logo"></div>
                <div className="content">
                    <div className="menu">
                        📖  Prophecy Book - Notebook for Javascript AI
                    </div>
                    <Toolbar store={store}/>
                </div>
            </header>
        )
    }
}

export default Header;