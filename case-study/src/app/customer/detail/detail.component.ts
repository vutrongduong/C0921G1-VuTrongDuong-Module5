import {Component, Inject, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  customer: Customer;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private router: Router,
              private customerService: CustomerService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.customerService.findById(this.data).subscribe(value => {
      this.customer = value;
    });
  }

  close() {
    this.dialog.closeAll();
  }

}
