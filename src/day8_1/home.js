import React, { Component } from 'react';
import Header from './components/header';
import Section from './components/section';
import Footer from './components/footer';

class Home extends Component {
    render() {
        return (
            <div id="home">
                <Header />
                <Section />
                <Footer />
            </div>
        );
    }
}

export default Home;