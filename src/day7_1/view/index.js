import React, { Component } from 'react'
import {connect} from '../utils/connect'
class Index extends Component {
    render () {
        console.log(this.props.data,'index') // index对应的数据
        let {list}=this.props.data
        return (
            <div>
                {
                    // console.log(this.props.data.name)
                    this.props.data.name
                }
                {
                    this.props.data.content
                }
            </div>
        )
    }
}

export default connect(()=>{
    return 'listData'
})(Index)