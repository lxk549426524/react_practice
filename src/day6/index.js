import React, { Component } from 'react';
import Deatil from './deatil';

class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            content:'传给deatil子组件'
        }
    }
    deatilClick=(content)=>{
        this.setState({
            content
        })
    }
    render() {
        let {content} = this.state
        return (
            <div>
                {console.log(content)}
                {content}
                <Deatil content={content} deatilClick={this.deatilClick}/>
            </div>
        );
    }
}

export default Index;