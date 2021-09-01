import Navbar from "./view/organisms/navbar/Navbar"
import React from 'react';
import './App.css';
import AppRouter from './view/organisms/appRouter/AppRouter'
import {BrowserRouter} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <AppRouter />
      </div>
   </BrowserRouter>
  );
}

export default App;
