import React from 'react';
import axios from 'axios';
import '../../common/mock/mock';
import {NavLink} from "react-router-dom";
import RouteView from "../../route/index";
class Content extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }
    
    componentDidMount(){
        axios.get('/video/home/content').then(res=>{
            console.log()
            this.setState({
                data:res.data.data
            })
        })
    }
    render(){
        let {data}=this.state
        return <div className="list">
            {
                data.length>0&&data.map((v,i)=>{
                    return <div key={i} className='content' onClick={()=>{
                        this.props.history.push('/details',v)
                    }}>
                        <img src={v.img} />
                        <div className='contentlist'>
                            <p>{v.nm}</p>
                            <p>观众评{v.sc}</p>
                            <p>主演:{v.star}</p>
                            <p>{v.showInfo}</p>
                        </div>
                        <button>购票</button>
                    </div>
                })
            }
        </div>
    }
}


export default Content


