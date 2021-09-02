export type layoutType = {i: string, x: number, y: number, w: number, h: number,static: boolean}
export type gridConfigurationType = {
    cols: {lg?:number, md?:number,sm?: number, xs?:number, xxs?:number},
    breackpoints: {lg?:number, md?:number,sm?: number, xs?:number, xxs?:number},
    layouts: {
        lg?:layoutType[],
        md?:layoutType[],
        sm?:layoutType[],
        xs?:layoutType[],
        xxs?:layoutType[]
    },
    rowHeight: number
}
export type gridElementsType = {i: string, dom: JSX.Element}
export enum PagesId {CRYPTO_LIST= "cryptoListPage", ETHEREUM_DETAIL = "ethereumDetailPage"}