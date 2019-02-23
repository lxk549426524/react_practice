import React, { Component } from 'react';

class Messages extends Component {
    render() {
        let {content,msgRemove,amendClick} = this.props
        return (
            <div>
                {
                    content.length>0&&content.map((v,i)=>{
                        return <div key={i} className="save">
                            <div className="left">
                                <p><span>{v.name}</span> <span>{v.tal}</span></p>
                                <p><span>{v.site}</span> <span>{v.address}</span></p>
                            </div>
                            <div className="right">
                                <span onClick={()=>{
                                    amendClick(v,i)
                                }}>修改</span>
                                <span onClick={()=>{
                                    msgRemove(v,i)
                                }}>删除</span>   
                            </div>
                        </div>
                    })
                }
            </div>
        );
    }
}

export default Messages;