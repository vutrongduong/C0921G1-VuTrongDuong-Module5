import {CustomerType} from './CustomerType';

export class Customer {
   id?: number;
   customerType: CustomerType;
   customerName?: string;
   customerBirthday?: string;
   customerGender?: boolean;
   customerIdCard?: string;
   customerPhone?: string;
   customerEmail?: string;
   customerAddress?: string;

  constructor(id: number, customerType: CustomerType, customerName: string, customerBirthday: string, customerGender: boolean, customerIdCard: string, customerPhone: string, customerEmail: string, customerAddress: string) {
    this.id = id;
    this.customerType = customerType;
    this.customerName = customerName;
    this.customerBirthday = customerBirthday;
    this.customerGender = customerGender;
    this.customerIdCard = customerIdCard;
    this.customerPhone = customerPhone;
    this.customerEmail = customerEmail;
    this.customerAddress = customerAddress;
  }
}
