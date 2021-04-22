import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  host = environment.host;

  constructor(private http: HttpClient) { }


  public save(product: Product): Observable<Product> {
    return this.http.post<Product>(this.host + '/products/', product);
  }

  public update(product: Product): Observable<Product> {
    return this.http.put<Product>(this.host + '/products/' + product.id, product);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(this.host + '/products/' + id);
  }

  public getProducts(): Observable<Product[]> {
    const host = Math.random() > 0.2 ? environment.host : environment.unreachableHost;
    return this.http.get<Product[]>(host + '/products');
  }

  public getAvailableProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.host + '/products?available=true');
  }
}
