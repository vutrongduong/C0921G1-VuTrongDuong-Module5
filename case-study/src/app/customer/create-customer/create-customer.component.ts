import {Component, OnInit} from '@angular/core';
import {CustomerType} from '../../model/CustomerType';
import {CustomerTypeService} from '../../services/customer-type.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {CustomerService} from '../../services/customer.service';
import {Router} from '@angular/router';
import {Customer} from '../../model/Customer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer = new Customer();
  customerTypeList: CustomerType[];
  createForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
    customerName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
    customerBirthday: new FormControl('', [Validators.required]),
    customerGender: new FormControl('', [Validators.required]),
    customerIdCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{12}|\\d{9}$')]),
    customerPhone: new FormControl('', [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91){1}\\d{7}$')]),
    customerEmail: new FormControl('', [Validators.required, Validators.email]),
    customerType: new FormControl('', [Validators.required]),
    customerAddress: new FormControl('', [Validators.required])
  });

  constructor(private customerService: CustomerService
    , private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(value => {
      this.customerTypeList = value;
      console.log(this.customerTypeList);
    });
  }

  createSubmit() {
    this.customerService.create(this.createForm.value).subscribe(() => {
      this.router.navigateByUrl('/customer');
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      });
    });
  }
}
