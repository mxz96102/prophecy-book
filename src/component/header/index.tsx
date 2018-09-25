import * as React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="logo"></div>
                <div className="content">
                    <div className="menu"></div>
                    <div className="toolbar"></div>
                </div>
            </header>
        )
    }
}

export default Header;