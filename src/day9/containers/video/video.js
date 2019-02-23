import React from 'react';
import {NavLink} from "react-router-dom";
import RouteView from "../../route/index";

class Video extends React.Component{
    render(){
        const {routes}=this.props;
        return <div className='shop'>
            <RouteView routes={routes}/>
            <footer>
                <NavLink to='/video/home/content' className='linkStyle'>
                    <p className='iconfont icon-08'></p>
                    电影
                </NavLink>
                <NavLink to='/video/menu' className='linkStyle'>
                    <p className='iconfont icon-101'></p>
                    影院
                </NavLink>
                <NavLink to='/video/mine' className='linkStyle'>
                    <p className='iconfont icon-icongerenzhongxin-01'></p>
                    我的
                </NavLink>
            </footer>
        </div>
    }
}

export default Video 