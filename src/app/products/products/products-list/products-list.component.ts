import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/products.reducer';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productsState$: Observable<ProductsState> | null = null;
  readonly dataStateEnum = ProductsStateEnum;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.productsState$ = this.store.pipe(
      map((state) => state.mainState)
    );
  }

}
