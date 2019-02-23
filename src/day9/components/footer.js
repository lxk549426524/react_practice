import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <dl>
                    <dt className='iconfont icon-08'></dt>
                    <dd>电影</dd>
                </dl>
                <dl>
                    <dt className='iconfont icon-101'></dt>
                    <dd>影院</dd>
                </dl>
                <dl>
                    <dt className='iconfont icon-icongerenzhongxin-01'></dt>
                    <dd>我的</dd>
                </dl>
            </footer>
        );
    }
}

export default Footer;