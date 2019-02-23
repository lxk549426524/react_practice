import React from 'react';
import {NavLink} from "react-router-dom";
import RouteView from "../../route/index";
class Home extends React.Component{
    render(){
        const {routes}=this.props;
        return <div className='home'>
            <div className='video'>
                <span>北京<i className='iconfont icon-xiangxia' style={{marginLeft:'5px'}}></i></span>
                <NavLink to='/video/home/content' className='linkStyle' activeClassName='active'>正在热播</NavLink>
                 <NavLink to='/video/home/about' className='linkStyle' activeClassName='active'>即将上映</NavLink> 
                <i className='iconfont icon-fangdajing' style={{fontSize:'18px'}}></i>
            </div>
            <RouteView routes={routes}/>
        </div>
    }
}


export default Home


