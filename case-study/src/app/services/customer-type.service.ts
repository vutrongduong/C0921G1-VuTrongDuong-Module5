import {Injectable} from '@angular/core';
import {CustomerType} from '../model/CustomerType';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  API_URL = 'http://localhost:3000/customerTypeList';
  customerTypeList: CustomerType[];

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.API_URL);
  }
}
