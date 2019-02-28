import React, { Component } from 'react';
import Message from '../containers/message';
import Site from '../containers/site';
let arr=[]
let ind=0
class Section extends Component {
    constructor(props) {
        super(props);
        this.state={
            content:[],
            amend:{}
        }
    }
    affirmClick=(obj)=>{
        console.log(obj)
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
    amendClick=(list,inds)=>{
        ind=inds
        console.log(arr[ind])
        console.log('amend',list)
    }
    amendChange=()=>{

    }
    render() {
        let {content,amend}=this.state
        console.log(arr[ind])
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