import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import web3Reducer from './reducers/Web3Reducer';



export default configureStore({
  reducer: web3Reducer,
  middleware: [thunk]
})