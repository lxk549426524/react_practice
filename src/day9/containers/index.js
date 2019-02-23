import React, { Component } from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import RouteView from '../route/index';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            child:'猫眼电影'
        }
    }
    render() {
        let {child}=this.state
        return <div className='app'>
                <Header child={child}></Header>
                <Layout>
                    <Router>
                        <RouteView/>
                    </Router>
                </Layout>
            </div>
    }
}

export default App;