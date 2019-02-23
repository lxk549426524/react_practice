import React from 'react';
class Details extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data:{}
        }
    }
    
    componentDidMount(){
        this.setState({
            data:this.props.location.state
        })
    }
    render(){
        let {data}=this.state
        console.log(data)
        return <div className='content'>
            <img src={data.img} />
            <div className='contentlist'>
                <p>{data.nm}</p>
                <p>观众评{data.sc}</p>
                <p>主演:{data.star}</p>
                <p>{data.showInfo}</p>
            </div>
        </div>
    }
}

export default Details