import {Responsive, WidthProvider } from 'react-grid-layout';
import {getGridConfiguration} from '../../../utils/gridConfigurations/GridConfiguratorFactory'
import EthBlockInspector from "../../organisms/ethBlockInspector/EthBlockInspector"
import '../../../css/GeneralGrid.scss'
import React from 'react';
import {gridConfigurationType, gridElementsType,PagesId} from '../../../types/customTypes'
const ResponsiveGridLayout = WidthProvider(Responsive);
export default function EthereumPage() {
    
    const gridComponents :gridElementsType[] = [{i: "ethBlockInspector", dom: <EthBlockInspector />}]
    const gridConfiguration : gridConfigurationType = getGridConfiguration(PagesId.ETHEREUM_DETAIL)
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