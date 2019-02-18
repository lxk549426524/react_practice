import React, { Component } from 'react';

class Deatil extends Component {
    contentChange=()=>{
        console.log(1)
        let {deatilClick} = this.props
        console.log(deatilClick)
        deatilClick('点击改变index传入的值')
    }
    render() {
        let {content} = this.props;
        console.log(content)
        return (
            <div>
                this is Deatil
                {console.log(content)}
                {content}
                <button onClick={this.contentChange}>点击更改</button>
            </div>
        );
    }
}

export default Deatil;