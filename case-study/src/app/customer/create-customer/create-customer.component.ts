import {Component, OnInit} from '@angular/core';
import {CustomerType} from '../../model/CustomerType';
import {CustomerTypeService} from '../../services/customer-type.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  public customerTypeList: CustomerType[];
  createForm = new FormGroup({
    customerId: new FormControl(),
    customerType: new FormControl(),
    customerName: new FormControl(),
    customerBirthday: new FormControl(),
    customerGender: new FormControl(),
    customerIdCard: new FormControl(),
    customerPhone: new FormControl(),
    customerEmail: new FormControl(),
    customerAddress: new FormControl()
  });

  constructor(private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.customerTypeList = this.customerTypeService.getAll();
  }

  createSubmit() {

  }
}
