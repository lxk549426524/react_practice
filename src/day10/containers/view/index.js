import React,{Component} from 'react';
import Store from 'store';
import axios from 'axios';
import 'common/mock'

class Home extends Component{
    constructor(props) {
        super(props);
        this.state={
            flag:false
        }
        console.log(Store.subscribe(this.forceUpdate))
        // Store.subscribe()
    }
    
    componentDidMount(){
        axios.get('data').then(res=>{
            Store.dispatch({
                type:'NAME',
                payload:res.data
            })
            // this.forceUpdate()
        })
    }
    render(){
        let list=Store.getState().goodList
        let {flag}=this.state
        console.log(list)
        return (
            <div className='home'>
                <div>
                    {
                        list.map((v,i)=>{
                            return <div key={i} className='list'>
                                <p>
                                    <span>
                                        <span style={{display:'block'}}>{v.name}<span style={{marginLeft:'10px'}}>{v.rank}</span></span>
                                        <span style={{display:'block'}}>宝宝{v.babyM}个月{v.babyD}天</span>
                                    </span>
                                    <span onClick={(e)=>{
                                        !flag?e.target.innerHTML='已关注':e.target.innerHTML='+ 关注'
                                        flag=!flag
                                    }}>+ 关注</span>
                                </p>
                                <p>
                                    <span style={{width:'84%'}}>{v.type}</span>
                                    <button onClick={()=>{
                                        console.log(list[i])
                                        list.splice(i,1)
                                        Store.dispatch({
                                            type:'NAME',
                                            payload:list
                                        })
                                        this.forceUpdate() 
                                    }}>删除</button>
                                </p>
                                <p><span>{v.time}小时前</span><span>回复{v.reply}</span></p>
                                <p><span>{v.praise}人赞过</span><span onClick={()=>{
                                
                                }}>赞{v.praise}</span></p>
                            </div>
                        })
                    }
                </div>
                <p>
                    <input type='text' placeholder='我也有话说'/>
                    <button onClick={()=>{

                    }}>发送</button>
                </p>
            </div>
        )
    }
}

export default Home