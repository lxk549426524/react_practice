import React, { Component } from 'react'
import Context from '../utils/context'
export const connect = (list) => {
    return (Module) => {
        return class extends Component{
            render(){
                return <Context.Consumer>
                    {
                        (props)=>{
                            let content=list(props.data)
                            return <Module {...content} {...this.props}/>
                        }
                    }
                </Context.Consumer>
            }
        }
    }
}