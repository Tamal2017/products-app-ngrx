import { Action } from '@ngrx/store';
import { Product } from '../products/model/product';
import { ProductsActions, ProductsActionsType } from './products.action';


export enum ProductsStateEnum {
    LOADING = 'Loading',
    LOADED = 'Loaded',
    ERROR = 'Error',
    INITIAL = 'Initial'
}

export interface ProductsState {
    products: Product[];
    errorMessage: string;
    dataState: ProductsStateEnum;
}

const initState = {
    products: [],
    errorMessage: '',
    dataState: ProductsStateEnum.INITIAL
};

export function ProductsReducer(state = initState, action: Action): ProductsState {
    switch (action.type) {
        case ProductsActionsType.GET_ALL_PRODUCTS:
            return { ...state, dataState: ProductsStateEnum.LOADING };
        case ProductsActionsType.GET_ALL_PRODUCTS_SUCCESS:
            return { ...state, dataState: ProductsStateEnum.LOADED, products: (action as ProductsActions).payload };
        case ProductsActionsType.GET_ALL_PRODUCTS_ERROR:
            return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsActions).payload };
        default:
            return { ...state };
    }

}
