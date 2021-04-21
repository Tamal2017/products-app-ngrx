import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAllProductsAction } from 'src/app/ngrx/products.action';
import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/products.reducer';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    this.store.dispatch(new GetAllProductsAction({}));
  }

}
