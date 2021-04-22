import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { ProductService } from '../products/services/product.service';
import { GetAllProductsAction, GetAllProductsActionError, GetAllProductsActionSuccess, ProductsActionsType } from './products.action';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class ProductsEffects {

    constructor(private productService: ProductService, private effectsActions: Actions) { }

    getAllProductsEffects$: Observable<Action> = createEffect(
        () => this.effectsActions.pipe(
            ofType(ProductsActionsType.GET_ALL_PRODUCTS),
            mergeMap(() => {
                return this.productService.getProducts().pipe(
                    map(products => new GetAllProductsActionSuccess(products)),
                    catchError(err => of(new GetAllProductsActionError(err.message)))
                );
            })
        )
    );

}
