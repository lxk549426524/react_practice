import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <i className="iconfont icon-angle-left"></i>
                <span>收货地址</span>
                <i className="iconfont icon-gengduo"></i>
            </header>
        );
    }
}

export default Header;