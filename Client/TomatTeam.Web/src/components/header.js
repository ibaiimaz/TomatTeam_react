import React, { Component } from 'react';

class Header extends Component {
    render() {
        const containerStyle = {
            border: '1px solid #666',
            padding: '5px'
        };

        return (
            <div className="header">
                <h1 >TOMATTEAM</h1>                
            </div>
        );
    }
}

export default Header;