import React, { Component } from 'react';

class Header extends Component {

    render() {
        let {child}=this.props
        return <header>
            {
                child
            }
        </header>
    }
}

export default Header;