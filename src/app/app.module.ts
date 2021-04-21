import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductsEffects } from './ngrx/products.effects';
import { ProductsReducer } from './ngrx/products.reducer';
import { ProductsListComponent } from './products/products/products-list/products-list.component';
import { ProductsNavComponent } from './products/products/products-nav/products-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsListComponent,
    ProductsNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({mainState: ProductsReducer}),
    EffectsModule.forRoot([ProductsEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
