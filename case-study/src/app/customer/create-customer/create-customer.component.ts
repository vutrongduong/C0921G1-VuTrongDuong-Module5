import { Component, OnInit } from '@angular/core';
import {CustomerType} from '../../model/CustomerType';
import {CustomerTypeService} from '../../services/customer-type.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  public customerTypeList: CustomerType[];

  constructor(private customerTypeService: CustomerTypeService) { }

  ngOnInit(): void {
    this.customerTypeList = this.customerTypeService.getAll();
  }

}
