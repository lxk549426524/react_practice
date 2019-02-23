import React, { Component } from 'react';
import Message from '../containers/message';
import Site from '../containers/site';
let arr=[]
class Section extends Component {
    constructor(props) {
        super(props);
        this.state={
            content:[],
            amend:{}
        }
    }
    affirmClick=(obj)=>{
        arr.push(obj)
        this.setState({
            content:arr
        })
    }
    msgRemove=(list,ind)=>{
        arr.map((v,i)=>{
            return v===list?arr.splice(ind,1):null
        })
        this.setState({
            content:arr
        })
    }
    amendClick=(list,ind)=>{
        this.setState({
            amend:list
        })
        console.log('amend',list,ind)
    }
    amendChange=()=>{

    }
    render() {
        let {content,amend}=this.state
        return (
            <section>
                <Site affirmClick={this.affirmClick} amendChange={this.amendChange} amend={amend}/>
                <p className="hr"></p>
                <Message content={content} msgRemove={this.msgRemove} amendClick={this.amendClick}/>
            </section>
        );
    }
}

export default Section;