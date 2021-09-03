import React,{ useState, useEffect }  from "react";
import {connect,useSelector} from "react-redux"
import {storeType} from "../../../state/storeType"


const EthBlockInspector = () => {

  const web3 = useSelector((state:storeType) => state.ethWeb3)


    


    return (
        <div>
            body
        </div>
    );
}

export default connect(null, null)(EthBlockInspector)