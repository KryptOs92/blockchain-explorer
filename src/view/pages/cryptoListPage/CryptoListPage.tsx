import {Responsive, WidthProvider } from 'react-grid-layout';
import {getGridConfiguration} from '../../../utils/gridConfigurations/GridConfiguratorFactory'
import CardanoCard from '../../organisms/cards/cardano/CardanoCard'
import EthereumCard from '../../organisms/cards/ethereum/EthereumCard'
import '../../../css/GeneralGrid.scss'
import React from 'react';
import {gridConfigurationType, gridElementsType} from '../../../types/customTypes'
const ResponsiveGridLayout = WidthProvider(Responsive);
export default function CryptoListPage() {
    
    const gridComponents :gridElementsType[] = [{i: "cardano", dom: <CardanoCard />},{i: "ethereum", dom: <EthereumCard />}]
    const gridConfiguration : gridConfigurationType = getGridConfiguration("cryptoListPage")
    const renderGridElements = (gridComponents : gridElementsType[]) => {
        let elements :  JSX.Element[]= []
        // eslint-disable-next-line array-callback-return
        gridComponents.map((component) => {
            elements.push(<div key={component.i} >
                {component.dom}
            </div>)
        })
        return elements
    }
    return <ResponsiveGridLayout   
                        className="layout" 
                        layouts={gridConfiguration.layouts}
                        breakpoints={gridConfiguration.breackpoints}
                        cols={gridConfiguration.cols}
                        //onLayoutChange={gridConfiguration.onLayoutChange}
                        rowHeight={gridConfiguration.rowHeight}
            >
                        
    {
        renderGridElements(gridComponents)
    }
    </ResponsiveGridLayout>
}