import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  createForm: FormGroup;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private  route: Router) {
  }

  ngOnInit(): void {
    let id = +this.activatedRoute.snapshot.params.id;
    // const customer = this.customerService.findById(id);
    // this.createForm = new FormGroup({
    //   customerId: new FormControl(customer.customerId, Validators.required),
    //   customerName: new FormControl(customer.customerName, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
    //   customerGender: new FormControl(customer.customerGender, Validators.required),
    //   customerBirthday: new FormControl(customer.customerBirthday, Validators.required),
    //   customerType: new FormControl(customer.customerType, Validators.required),
    //   customerIdCard: new FormControl(customer.customerIdCard, [Validators.required, Validators.pattern('^\\d{12}|\\d{9}$')]),
    //   customerPhone: new FormControl(customer.customerPhone, [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91){1}\\d{7}$')]),
    //   customerEmail: new FormControl(customer.customerEmail, [Validators.required, Validators.email]),
    //   customerAddress: new FormControl(customer.customerAddress, Validators.required),
    // });
  }

  updateCustomer() {
    // let customer = this.createForm.value;
    // let customerId = this.createForm.get('customerId').value;
    // this.customerService.update(customerId, customer);
    // this.route.navigateByUrl('customer');
    // Swal.fire({
    //   position: 'top-end',
    //   icon: 'success',
    //   title: 'Successfully updated customer',
    //   showConfirmButton: false,
    //   timer: 1500
    // });
  }
}
