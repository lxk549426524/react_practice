import React, { Component } from 'react';
import Header from './components/header';
import Section from './components/section';
import Footer from './components/footer';
import {BrowserRouter,Route} from 'react-router-dom'
class Index extends Component {
    render() {
        return (
            <div id='home'>
                <header>猫眼电影</header>
                
                <Footer />
            </div>
        );
    }
}

export default Index;