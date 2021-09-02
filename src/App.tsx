import Navbar from "./view/organisms/navbar/Navbar"
import React,{ useState, useEffect }  from "react";
import './App.css';
import {ActionTypes} from "./state/actions/web3/ActionTypes"
import {connectWeb3} from './state/actions/web3/Actions'
import AppRouter from './view/organisms/appRouter/AppRouter'
import {BrowserRouter} from "react-router-dom"
import { connect, useStore, useDispatch } from 'react-redux'



const mapDispatchToProps = {

  connectWeb3
}
/* interface propsType  {
  connectWeb3: Function
} */

function App() {
  const store = useStore()
  const dispatch = useDispatch()
  useEffect(() => {  
    
    console.log("STATE DEFUX 000: ",store.getState())
    if(store && !store.ethWeb3 && connectWeb3){
      dispatch(connectWeb3("https://mainnet.infura.io/v3/be47a51c255e46649a33f7f945cda99b"))
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <AppRouter />
      </div>
   </BrowserRouter>
  );
}

export default connect(null, null)(App)
