import { Action } from '@ngrx/store';
import { Product } from '../products/model/product';

export enum ProductsActionsType {
    GET_ALL_PRODUCTS = '[Products] Get all products',
    GET_ALL_PRODUCTS_SUCCESS = '[Products] Get all products success',
    GET_ALL_PRODUCTS_ERROR = '[Products] Get all products error',
}

export class GetAllProductsAction implements Action {
    type: ProductsActionsType.GET_ALL_PRODUCTS;
    constructor(public payload: any) {
    }
}

export class GetAllProductsActionSuccess implements Action {
    type: ProductsActionsType.GET_ALL_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]) {
    }
}

export class GetAllProductsActionError implements Action {
    type: ProductsActionsType.GET_ALL_PRODUCTS_ERROR;
    constructor(public payload: string) {
    }
}

export type ProductsActions = GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError;
