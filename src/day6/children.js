import React, { Component } from 'react';

class Children extends Component {
    contentChange=(content)=>{
        let {contentChange} = this.props
        contentChange(content)
    }
    render() {
        let {content} = this.props;
        return (
            <div>
                <button onClick={()=>{this.contentChange('点击children改变index传入的值')}}>children点击更改</button>
            </div>
        );
    }
}

export default Children;