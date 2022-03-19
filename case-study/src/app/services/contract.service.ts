import {Injectable} from '@angular/core';
import {Contract} from '../model/contract';
import {Customer} from '../model/customer';
import {CustomerType} from '../model/customerType';
import {Facility} from '../model/facility';
import {RentType} from '../model/RentType';
import {FacilityType} from '../model/facilityType';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private contractList: Contract[];

  constructor() {
  }

  public getAll() {
    // this.contractList = [];
    // this.contractList.push(
    //   new Contract(1, '2020-02-02', '2020-02-02', '1000', '2000',
    //     new Customer(1, new CustomerType(1, 'vip'), 'nguyen van a', '2020-02-02',
    //       true, '123456789', '0905428391', 'duong@gmail.com', 'da nang'),
    //     new Facility(1, 'a', 'a', 'a', 1, new RentType(1, 'a', 1), new FacilityType(1, 'a'),
    //       'a', 'a', 'a', 'a',))
    // );
    // return this.contractList;
  }
}
