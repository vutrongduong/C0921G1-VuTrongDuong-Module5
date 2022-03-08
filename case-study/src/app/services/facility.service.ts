import {Injectable} from '@angular/core';
import {Facility} from '../model/facility';
import {ServiceType} from '../model/ServiceType';
import {RentType} from '../model/RentType';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilityList: Facility[] = [];

  constructor() {
  }

  public getAll() {
    this.facilityList = [];
    this.facilityList.push(
      new Facility(1, 'a', 'a', 'a', 1, new RentType(1, 'a', 1), new ServiceType(1, 'a'),
        'a', 'a', 'a', 'a',)
    );
    // this.facilityList.splice()
    return this.facilityList;
  }
}
