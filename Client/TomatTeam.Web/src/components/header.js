import React, { Component } from 'react';

class Header extends Component {
    render() {
        const containerStyle = {
            border: '1px solid #666',
            padding: '5px'
        };

        return (
            <div className="header col-xs-12 col-sm-12 col-md-5 col-lg-offset-1 col-lg-4">
                <div className="title">TOMATTEAM</div>                
            </div>
        );
    }
}

export default Header;