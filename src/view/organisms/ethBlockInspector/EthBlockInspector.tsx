import React,{ useState, useEffect }  from "react";
import {connect,useSelector} from "react-redux"
import {storeType} from "../../../state/storeType"


const EthBlockInspector = () => {

  const web3 = useSelector((state:storeType) => state.ethWeb3)

    const inspectBlocks = web3.eth.getBlockNumber().then((latest) => {
        for(let i = 0; i < 10; i++){
            web3.eth.getBlock(latest - i ).then(console.log)
        }
    })
    inspectBlocks()


    return (
        <div>
            body
        </div>
    );
}

export default connect(null, null)(EthBlockInspector)