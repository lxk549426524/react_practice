import React, { Component } from 'react'
import {connect} from '../utils/connect'
import List from './list'
class Index extends Component {
    render () {
        console.log(this.props,'index') // index对应的数据
        return (
            <div>
                {
                    this.props.name
                }
                {
                    this.props.content
                }
                <List age={"asdfadsf"} />
            </div>
        )
    }
}

export default connect((data)=>{
    return data.listData
})(Index)