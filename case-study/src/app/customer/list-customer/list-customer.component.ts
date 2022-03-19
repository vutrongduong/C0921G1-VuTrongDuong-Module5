import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../services/customer.service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteCustomerComponent} from '../delete-customer/delete-customer.component';
import {CustomerType} from '../../model/customerType';
import {DetailComponent} from '../detail/detail.component';


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  public customerList: Customer[];
  public customerTypeList: CustomerType[];
  customerType: string = '';
  customerName: string = '';
  customerAddress: string = '';
  page: number = 0;
  toTalPage: number;

  constructor(private customerService: CustomerService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.customerService.getAllCustomerType().subscribe(value => {
      this.customerTypeList = value;
      this.getList();
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
    });
  }

  getList() {
    this.customerService.getList(this.page,this.customerName,this.customerAddress,this.customerType).subscribe(value => {
      console.log(value)
      this.customerList = value['content'];
      this.toTalPage = value['totalPages'];
    });
  }

  search() {
    // if (this.customerName == '' && this.customerType == '' && this.customerAddress == '') {
    //   this.customerService.getAll().subscribe(value => {
    //     this.customerList = value;
    //   });
    //   this.customerService.getAllCustomerType().subscribe(value => {
    //     this.customerTypeList = value;
    //   });
    // } else {
    //   this.customerService.search(this.customerName, this.customerType, this.customerAddress).subscribe(value => {
    //     console.log(this.customerName);
    //     console.log(this.customerType);
    //     console.log(this.customerAddress);
    //     this.customerList = value;
    //     this.page = 0;
    //   });
    // }
    console.log(this.customerName)
    console.log(this.customerName)
    console.log(this.customerName)
    this.ngOnInit()
  }

  openDialogView(id: number) {
    const dialogRef = this.dialog.open(DetailComponent, {
      width: '800px',
      height: '500px',
      data: id
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  next() {
    if(this.page <= this.toTalPage){
      this.page = this.page + 1;
    }
    this.getList();
  }

  pre() {
    this.page = this.page - 1;
    this.getList();
  }
}
