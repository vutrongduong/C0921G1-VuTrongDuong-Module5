import {Injectable} from '@angular/core';
import {Facility} from '../model/facility';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FacilityType} from '../model/facilityType';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {

  API_URL = 'http://localhost:3000/facilityTypeList';
  public facilityTypeList: FacilityType[];

  constructor(private httpClient: HttpClient) {
    this.facilityTypeList = [];
  }

  getAll(): Observable<FacilityType[]> {
    return this.httpClient.get<FacilityType[]>(this.API_URL);
  }

}
