import {Injectable} from '@angular/core';
import {Customer} from '../model/Customer';
import {CustomerType} from '../model/CustomerType';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API_URL = 'http://localhost:3000/customerList';
  public customerList: Customer[];

  constructor(private httpClient: HttpClient) {
    this.customerList = [];
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL + '/' + id);
  }

  update(customer: Customer): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + '/' + customer.id, customer);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + '/' + id);
  }

  create(customer: Customer): Observable<void> {
    return this.httpClient.post<void>(this.API_URL, customer);
  }
}
