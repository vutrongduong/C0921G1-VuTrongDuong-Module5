import {Component, OnInit} from '@angular/core';
import {CustomerType} from '../../model/customerType';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {CustomerService} from '../../services/customer.service';
import {Router} from '@angular/router';
import {Customer} from '../../model/customer';
import {Validate} from '../validate';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  validate = new Validate();
  list: Customer[];
  customer = new Customer();
  customerList: Customer[];
  customerTypeList: CustomerType[];
  flag = false;
  exitsId = false;
  exitsEmail = false;
  exitsIdCard = false;
  createForm = new FormGroup({
    // id: new FormControl('', [Validators.required, Validators.pattern('^KH-[0-9]{4}$')],),
    customerName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
    customerBirthday: new FormControl('', [Validators.required]),
    customerGender: new FormControl('', [Validators.required]),
    customerIdCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{12}|\\d{9}$')]),
    customerPhone: new FormControl('', [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91){1}\\d{7}$')]),
    customerEmail: new FormControl('', [Validators.required, Validators.email]),
    customerType: new FormControl('', [Validators.required]),
    customerAddress: new FormControl('', [Validators.required])
  });

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerService.getAllCustomerType().subscribe(value => {
      this.customerTypeList = value;
    });
    this.customerService.getAll().subscribe(value => {
      this.customerList = value;
    });
  }

  createSubmit() {
    // if (this.validate.checkExitsId(this.createForm.value.id, this.customerList)) {
    //   this.exitsId = true;
    // } else {
    //   this.exitsId = false;
    // }
    if (this.validate.checkExitsIdCard(this.createForm.value.customerIdCard, this.customerList)) {
      this.exitsIdCard = true;
    } else {
      this.exitsIdCard = false;
    }
    if (this.validate.checkExitsEmail(this.createForm.value.customerEmail, this.customerList)) {
      this.exitsEmail = true;
    } else {
      this.exitsEmail = false;
    }
    if (this.createForm.valid) {
      console.log(this.createForm.value)
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
    } else {
      this.flag = true;
    }
  }

}
