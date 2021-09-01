import { gridConfigurationType } from './../../types/customTypes';
import {coinListGridConfiguration} from "./conListPageConfiguration"




export function getGridConfiguration(page : string): gridConfigurationType | null{
    switch (page){
        case "cryptoListPage":
            return coinListGridConfiguration
        default:
            return null
    }
    
}