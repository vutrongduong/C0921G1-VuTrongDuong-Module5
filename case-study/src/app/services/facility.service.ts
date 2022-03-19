import {Injectable} from '@angular/core';
import {Facility} from '../model/Facility';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  API_URL = 'http://localhost:3000/facilityList';
  public facilityList: Facility[];

  constructor(private httpClient: HttpClient) {
    this.facilityList = [];
  }

  getAll(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(this.API_URL);
  }

  findById(id: number): Observable<Facility> {
    return this.httpClient.get<Facility>(this.API_URL + '/' + id);
  }

  update(facility: Facility): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + '/' + facility.id, facility);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + '/' + id);
  }

  create(facility: Facility): Observable<void> {
    return this.httpClient.post<void>(this.API_URL, facility);
  }
}
