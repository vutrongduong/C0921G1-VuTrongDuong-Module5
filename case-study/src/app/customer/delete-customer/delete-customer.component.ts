import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../services/customer.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  deleteForm: FormGroup;
  customerId: number;
  customerName: string;
  customerType: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private router: Router,
              private customerService: CustomerService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    const customer = this.customerService.findById(this.data);
    this.customerId = customer.customerId;
    this.customerName = customer.customerName;
    this.customerType = customer.customerType.customerTypeName;

  }

  delete() {
    this.customerService.delete(this.data);
    this.dialog.closeAll();
  }

  close() {

    this.dialog.closeAll();
  }
}
