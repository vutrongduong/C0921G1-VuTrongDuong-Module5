import { Injectable } from '@angular/core';
import {FacilityType} from '../model/facilityType';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RentType} from '../model/RentType';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {

  API_URL = 'http://localhost:3000/rentTypeList';
  public rentTypeList: RentType[];

  constructor(private httpClient: HttpClient) {
    this.rentTypeList = [];
  }

  getAll(): Observable<RentType[]> {
    return this.httpClient.get<RentType[]>(this.API_URL);
  }
}
