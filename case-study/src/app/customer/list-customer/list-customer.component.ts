import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/Customer';
import {CustomerService} from '../../services/customer.service';
import {CustomerTypeService} from '../../services/customer-type.service';
import {CustomerType} from '../../model/CustomerType';
import {MatDialog} from '@angular/material/dialog';
import {DeleteCustomerComponent} from '../delete-customer/delete-customer.component';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  public customerList: Customer[];
  public customerTypeList: CustomerType[];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.customerList = this.customerService.getAll();
    this.customerTypeList = this.customerTypeService.getAll();
  }

  openDialog(customerId: number) {
    this.dialog.open(DeleteCustomerComponent , {
      data: customerId
    })
  }
}
