import {Injectable} from '@angular/core';
import {Customer} from '../model/Customer';
import {CustomerType} from '../model/CustomerType';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public customerList: Customer[];

  constructor() {
    this.customerList = [];
    this.customerList.push(
      new Customer(1, new CustomerType(1, 'vip'), 'nguyen van a', '2020-02-02',
        true, '123456789', '0905428391', 'duong@gmail.com', 'da nang'));
    this.customerList.push(
      new Customer(2, new CustomerType(1, 'vip'), 'nguyen van b', '2020-02-02',
        true, '123456789', '0905428391', 'duong@gmail.com', 'da nang'));
    this.customerList.push(
      new Customer(3, new CustomerType(1, 'vip'), 'nguyen van c', '2020-02-02',
        true, '123456789', '0905428391', 'duong@gmail.com', 'da nang'));
    this.customerList.push(
      new Customer(4, new CustomerType(1, 'vip'), 'nguyen van d', '2020-02-02',
        true, '123456789', '0905428391', 'duong@gmail.com', 'da nang'));
    this.customerList.push(
      new Customer(5, new CustomerType(1, 'vip'), 'nguyen van e', '2020-02-02',
        true, '123456789', '0905428391', 'duong@gmail.com', 'da nang'));
  }

  getAll() {
    return this.customerList;
  }

  findById(id: number) {
    return this.customerList.find(customer => customer.customerId === id);
  }

  update(id: number, customer: Customer) {
    for (let i = 0; i < this.customerList.length; i++) {
      if (this.customerList[i].customerId === id) {
        this.customerList[i] = customer;
      }
    }
    console.log(this.customerList);
  }

  delete(id: number) {
    for (let i = 0; i < this.customerList.length; i++) {
      if (this.customerList[i].customerId === id) {
        this.customerList.splice(i,1);
      }
    }
  }
}
