import React, { Component } from 'react';
import Index from './index'
class Home extends Component {
    render() {
        return (
            <div>
                this is Day8 Home
                <Index data={[5,6,7,8,9]} />
            </div>
        );
    }
}

export default Home;