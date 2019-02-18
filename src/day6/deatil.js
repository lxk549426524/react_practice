import React, { Component } from 'react';
import Children from './children'
class Deatil extends Component {
    constructor(props){
        super(props)
        this.state={
            deatilclick:[]
        }
    }
    contentChange=(content)=>{
        let {deatilClick} = this.props
        deatilClick(content)
    }
    render() {
        let {content} = this.props;
        return (
            <div>
                <button onClick={()=>{this.contentChange('点击deatil改变index传入的值')}}>deatil点击更改</button>
                <Children content={content} contentChange={this.contentChange}/>
            </div>
        );
    }
}

export default Deatil;