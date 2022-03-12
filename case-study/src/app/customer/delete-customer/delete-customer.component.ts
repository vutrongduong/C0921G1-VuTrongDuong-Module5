import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {CustomerService} from '../../services/customer.service';
import Swal from 'sweetalert2';
import {Customer} from '../../model/Customer';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})


export class DeleteCustomerComponent implements OnInit {
  customer: Customer;
  customerId: number;
  customerName: string;
  customerType: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private router: Router,
              private customerService: CustomerService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.customerService.findById(this.data).subscribe(value => {
      this.customer = value;
      this.customerId = this.customer.id;
      this.customerName = this.customer.customerName;
      this.customerType = this.customer.customerType.customerTypeName;
    });
  }

  delete() {
    this.customerService.delete(this.data).subscribe(() => {
      Swal.fire(
        'Good job!',
        'Successfully delete customer',
        'success'
      );
      this.dialog.closeAll();
    });
  }

  close() {
    this.dialog.closeAll();
  }
}
