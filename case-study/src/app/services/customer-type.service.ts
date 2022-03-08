import { Injectable } from '@angular/core';
import {CustomerType} from '../model/CustomerType';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  customerTypeList:CustomerType[];

  constructor() { }
  public getAll(){
    this.customerTypeList=[];
    this.customerTypeList.push(new CustomerType(1,"a"))
    this.customerTypeList.push(new CustomerType(2,"b"))
    this.customerTypeList.push(new CustomerType(3,"c"))
    this.customerTypeList.push(new CustomerType(4,"d"))
    return this.customerTypeList
  }
}
