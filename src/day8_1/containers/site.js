import React, { Component } from 'react';

class Site extends Component {
    constructor(props) {
        super(props);
        this.state={
            list:{
                name:'',
                tal:'',
                site:'',
                address:''
            },
            flag:true
        }
    }
    inputChange=(e)=>{
        let show=e.target.className
        if(e.target.className==='name'){
            this.setState({
                list:{
                    name:e.target.value
                }
            }) 
        }else if(e.target.className==='tal'){
            this.setState({
                list:{
                    tal:e.target.value
                }
            }) 
        }else if(e.target.className==='site'){
            this.setState({
                list:{
                    site:e.target.value
                }
            }) 
        }else if(e.target.className==='address'){
            this.setState({
                list:{
                    address:e.target.value
                }
            }) 
        }else{
            return
        }
        
        console.log(this.state.list)       
    }
    addClick(list){
        this.setState({
            flag:!list
        })
    }
    
    render() {
        let {flag,list}=this.state
        let {affirmClick}=this.props
        return (
            <div>
                {
                    !flag&&<div>
                    <p className="add">收 货 人：<input className='name' type="text" placeholder="请输入" onChange={this.inputChange}/></p>
                    <p className="add">收货电话：<input className='tal' type="text" placeholder="请输入" onChange={this.inputChange}/></p>
                    <p className="add">收货地址：<input className='site' type="text" placeholder="请输入" onChange={this.inputChange}/></p>
                    <p className="add">详细地址：<input className='address' type="text" placeholder="请输入" onChange={this.inputChange}/></p>
                </div>
                }
                {flag?<div className="ok" onClick={()=>{
                    this.addClick(flag)
                }}><i className='iconfont icon-jia'></i>添加</div>:<div className="ok" onClick={()=>{
                    this.addClick(flag)
                    affirmClick(list)
                }}>确认</div>}
            </div>
        );
    }
}

export default Site;