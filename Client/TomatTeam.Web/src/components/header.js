import React, { Component } from 'react';

class Header extends Component {
    render() {
        const containerStyle = {
            border: '1px solid #666',
            padding: '5px'
        };

        return (
            <div style={containerStyle}>
                <div style={{'float':'right'}}>User: { this.props.currentUser.userName }</div>
                <h2>TOMATTEAM</h2>
                <h4>Team: { this.props.currentUser.teamName }</h4>
                
            </div>
        );
    }
}

export default Header;