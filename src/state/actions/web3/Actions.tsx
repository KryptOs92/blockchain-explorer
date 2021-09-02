import {ActionTypes,CONNECT} from "./ActionTypes"

export const connectWeb3 = (url: string) : ActionTypes => {
    return {
        type: CONNECT,
        payload: url
    }
}