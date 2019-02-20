import React, { Component } from 'react';
import propTypes from 'prop-types'
class Index extends Component {
    static defaultProps={
        data:[1,2,3,4]
    }
    static propTypes={
        data:propTypes.array.isRequired
    }
    render() {
        let {data}=this.props
        return (
            <div>
                this is Day8 index
                {
                    data&&data.length&&data.map((v,i)=>{
                        return <p key={i}>{v}</p>
                    })
                }
            </div>
        );
    }
}

export default Index;