import React from 'react';
import axios from 'axios';
import '../../common/mock/mock';

class Menu extends React.Component{
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
                data:res.data.site
            })
        })
    }
    render(){
        let {data}=this.state
        return <div>
            {
                data.length>0&&data.map((v,i)=>{
                    console.log(v)
                    return <div key={i}>

                    </div>
                })
            }
        </div>
    }
}
export default Menu