import { gridConfigurationType, PagesId } from './../../types/customTypes';
import {coinListGridConfiguration} from "./coinListPageConfiguration"
import {ethListGridConfiguration} from "./ethPageConfiguration"




export function getGridConfiguration(page : string): gridConfigurationType | null{
    switch (page){
        case PagesId.ETHEREUM_DETAIL:
            return ethListGridConfiguration
        case PagesId.CRYPTO_LIST:
            return coinListGridConfiguration
        default:
            return null
    }
    
}