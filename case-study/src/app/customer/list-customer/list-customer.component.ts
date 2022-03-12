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

  constructor(private customerService: CustomerService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(value => {
      this.customerList = value;
    });
  }

  openDialog(id: number) {
   const dialogRef = this.dialog.open(DeleteCustomerComponent, {
      width: '450px',
      height: '350px',
      data: id
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    })

  }
}
