import {createStore} from 'redux';

let initStore={
    goodList:[]
}

function reducer(state=initStore,action){
    const {type,payload}=action
    switch(type){
        case "NAME":
            return {
                ...state,
                goodList:payload
            }
        default:
            return state
    }
}

let newStore=createStore(reducer)

export default newStore