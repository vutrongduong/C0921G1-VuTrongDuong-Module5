import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL + 'product');
  }

  saveProduct(product): Observable<void> {
    return this.httpClient.post<void>(this.API_URL + 'product', product);
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API_URL + 'product' + '/' + id);
  }

  updateProduct(id: number, product: Product): Observable<void> {
    return this.httpClient.put<void>(this.API_URL + 'product' + '/' + id, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + 'product' + '/' + id);
  }
}
