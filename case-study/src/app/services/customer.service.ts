import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerType} from '../model/customerType';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API_URL = 'http://localhost:8080/customer';
  public customerList: Customer[];

  constructor(private httpClient: HttpClient) {
    this.customerList = [];
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL);
  }

  public getAllCustomerType(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.API_URL + '/customerType');
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL + '/' + id);
  }

  update(customer: Customer): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + '/' + customer.customerId, customer);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + '/' + id);
  }

  create(customer: Customer): Observable<void> {
    return this.httpClient.post<void>(this.API_URL, customer);
  }

  search(name: string, customerType: string, email: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL + '?customerName_like=' + name + '&customerType.customerTypeName_like=' + customerType + '&customerEmail_like=' + email);
  }


  getList(page: number, customerName: string, customerAddress: string, customerType: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL + '?page=' + page + '&customerName=' + customerName
      + '&customerAddress=' + customerAddress + '&customerType=' + customerType);
  }
}
