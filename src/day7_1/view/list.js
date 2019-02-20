import React, { Component } from 'react'
import {connect} from '../utils/connect'
class List extends Component {
    render () {
        console.log(this.props,'list')
        return (
            <div>
                
            </div>
        )
    }
}

export default connect((data)=>{
    return data.indexData
})(List)