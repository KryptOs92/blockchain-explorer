import React from 'react';
import {Switch,Route} from 'react-router-dom'
import CryptoListPage from "../../pages/cryptoListPage/CryptoListPage"
export default function AppRouter() {


    return (

        <Switch>
            {/* <Route path="/" exact component={<div>HOMEPAGE</div>} /> */}
            <Route path="/cryptoList" exact component={CryptoListPage} />
        </Switch>

    )
}
