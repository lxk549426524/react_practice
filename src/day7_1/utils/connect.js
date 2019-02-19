import React, { Component } from 'react'
import Context from '../utils/context'
export const connect = (list) => {
    let content=list()
    return (Module) => {
        return class extends Component{
            render(){
                return <Context.Consumer>
                    {
                        (props)=>{
                            console.log(content)
                            console.log(props.data)
                            return <Module data={props.data[content]}/>
                        }
                    }
                </Context.Consumer>
            }
        }
    }
}