
import {Customer} from './Customer';
import {Facility} from './facility';

export class Contract {
  id: number;
  startDate: string;
  endDate: string;
  deposit: string;
  totalMoney: string;
  customer: Customer;
  facility: Facility;

  constructor(id: number, startDate: string, endDate: string, deposit: string, totalMoney: string, customer: Customer, facility: Facility) {
    this.id = id;
    this.startDate = startDate;
    this.endDate = endDate;
    this.deposit = deposit;
    this.totalMoney = totalMoney;
    this.customer = customer;
    this.facility = facility;
  }
}
