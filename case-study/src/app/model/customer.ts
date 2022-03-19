import {CustomerType} from './customerType';

export class Customer {
  customerId: number;
  customerType: CustomerType;
  customerName?: string;
  customerBirthday?: string;
  customerGender?: boolean;
  customerIdCard?: string;
  customerPhone?: string;
  customerEmail?: string;
  customerAddress?: string;


  constructor() {
  }
}
