import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {Customer} from '../../model/customer';
import {CustomerType} from '../../model/customerType';
import {Validate} from '../validate';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  createForm: FormGroup;
  customer = new Customer();
  customerTypeList: CustomerType[];
  validate = new Validate();
  list: Customer[];
  customerList: Customer[];
  flag = false;
  exitsEmail = false;
  exitsIdCard = false;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private  route: Router) {
  }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      customerId: new FormControl('', Validators.required),
      customerName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      customerGender: new FormControl('', Validators.required),
      customerBirthday: new FormControl('', Validators.required),
      customerType: new FormControl('', Validators.required),
      customerIdCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{12}|\\d{9}$')]),
      customerPhone: new FormControl('', [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91){1}\\d{7}$')]),
      customerEmail: new FormControl('', [Validators.required, Validators.email]),
      customerAddress: new FormControl('', Validators.required),
    });

    let id = this.activatedRoute.snapshot.params.id;
    this.customerService.findById(id).subscribe(value => {
      this.customer = value;
      this.createForm.patchValue(this.customer);
    }, error => {
    }, () => {
      this.customerService.getAllCustomerType().subscribe(value => {
        this.customerTypeList = value;
      });
      this.customerService.getAll().subscribe(value => {
        this.customerList = value;
      });
    });
  }

  updateCustomer() {
    // if (this.validate.checkExitsEmail(this.createForm.value.customerEmail, this.customerList)) {
    //   this.exitsEmail = true;
    // } else {
    //   this.exitsEmail = false;
    // }
    if (this.createForm.valid) {
      console.log(this.createForm.value)
      let customer = this.createForm.value;
      this.customerService.update(customer).subscribe();
      this.route.navigateByUrl('customer');
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Successfully updated customer',
        showConfirmButton: false,
        timer: 1500
      });
      this.ngOnInit();
    } else {
      this.flag = true;
    }
  }
}
