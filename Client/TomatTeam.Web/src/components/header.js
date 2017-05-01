import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <h2>TOMATTEAM</h2>
                <h3>Team: { this.props.teamName }</h3>
                <div>User: { this.props.userName }</div>
            </div>
        );
    }
}

export default Header;