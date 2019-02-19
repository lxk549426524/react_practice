import React, { Component } from 'react';
import Context from '../utils/context';
import Index from './index';
class Home extends Component {
    render () {
        let {data}=this.props
        console.log(data)
        return (
            <div>
                home主页面
                <Context.Provider value={{data}}>
                    <Index />
                </Context.Provider>
            </div>
        )
    }
}

export default Home