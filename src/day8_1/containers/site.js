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
        let {list}=this.state
        switch(e.target.name){
            case 'name':
                this.setState({
                    list:{
                        name:e.target.value,
                        tal:list.tal,
                        site:list.site,
                        address:list.address
                    }
                })
                break
            case 'tal':
                this.setState({
                    list:{
                        name:list.name,
                        tal:e.target.value,
                        site:list.site,
                        address:list.address
                    }
                })
                break
            case 'site':
                this.setState({
                    list:{
                        name:list.name,
                        tal:list.tal,
                        site:e.target.value,
                        address:list.address
                    }
                })
                break
            case 'address':
                this.setState({
                    list:{
                        name:list.name,
                        tal:list.tal,
                        site:list.site,
                        address:e.target.value
                    }
                })
                break
            default:
                break
        }
        console.log(list)
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
                    <p className="add">收 货 人：<input name='name' type="text" placeholder='请输入' onChange={this.inputChange}/></p>
                    <p className="add">收货电话：<input name='tal' type="text" placeholder='请输入'  onChange={this.inputChange}/></p>
                    <p className="add">收货地址：<input name='site' type="text" placeholder='请输入'  onChange={this.inputChange}/></p>
                    <p className="add">详细地址：<input name='address' type="text" placeholder='请输入'  onChange={this.inputChange}/></p>
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