import  { ActionTypes, CONNECT } from "../actions/web3/ActionTypes"
const Web3 = require('web3');

export default function web3Reducer(
    state= {},
    action: ActionTypes
){
    switch(action.type){
        
        case CONNECT:
            
            return {
                ...state,
                ethWeb3: new Web3(action.payload)
            }
        default:
            return state
    }
}